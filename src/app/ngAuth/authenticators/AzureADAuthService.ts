/// <reference path='cordova-plugin-ms-adal.d.ts' />

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { serviceConstants } from '../../authsettings.config';

import { XamarinBridge } from './XamarinBridge';

import { JwtHelper } from './JwtHelper';

let _authenticationContext: Microsoft.ADAL.AuthenticationContext;
let _authResult: Microsoft.ADAL.IAuthenticationResult;

@Injectable()
export class AzureADAuthService {
    private params = this.parseQueryString(location.hash);

    private parseQueryString(url: string) {
        const params = {};
        let queryString = '';
        if (url.search('#') !== -1) {
            queryString = url.substring(url.search('#') + 1);

        } else {
            queryString = url.substring(url.indexOf('?') + 1);
        }
        const a = queryString.split('&');
        for (let i = 0; i < a.length; i++) {
            const b = a[i].split('=');
            params[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
        }
        return params;
    }

    constructor() {
        if ((<any>window).isCordova || (<any>window).isElectron || (<any>window).isXamarin) {
            return;
        }
        if (this.params['id_token'] != null) {
            window.localStorage.setItem('id_token', this.params['id_token']);
            // redirect to get access token here..
            window.location.href = 'https://login.microsoftonline.com/' + serviceConstants.tenantID +
                '/oauth2/authorize?response_type=token&client_id=' + serviceConstants.clientID +
                '&resource=' + serviceConstants.graphResource +
                '&redirect_uri=' + encodeURIComponent(window.location.href) +
                '&prompt=none&state=' + this.params['state'] + '&nonce=SomeNonce';
        } else if (this.params['access_token'] != null) {
            window.localStorage.setItem('access_token', this.params['access_token']);
            // redirect to the original call URl here.
            window.location.href = decodeURIComponent(this.params['state']);
        }
    }

    public isUserAuthenticated(): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            this.getAccessToken().then(access_token => {
                resolve(access_token != null && access_token !== '');
            });
        });
        return promise;
    }

    logIn(state = '/') {
        if ((<any>window).isXamarin) {
            const promise = new Promise((resolve, reject) => {
                XamarinBridge.Authentication.Login(
                    'https://login.windows.net/' + serviceConstants.tenantID,
                    serviceConstants.graphResource,
                    serviceConstants.clientID,
                    serviceConstants.redirectURL
                ).then(access_token => {
                    resolve(access_token);
                });
            });
            return promise;
        } else if ((<any>window).isCordova) {
            const promise = new Promise((resolve, reject) => {
                const authority = 'https://login.windows.net/' + serviceConstants.tenantID;
                const _serviceConstants = serviceConstants;
                Microsoft.ADAL.AuthenticationContext.createAsync(authority)
                    .then(function (context) {
                        _authenticationContext = context;
                        _authenticationContext.acquireTokenAsync(
                            _serviceConstants.graphResource,
                            _serviceConstants.clientID,
                            _serviceConstants.redirectURL)
                            .then(function (authResult) {
                                _authResult = authResult;
                                resolve(1);
                            }, function (message) { reject(message); });
                    }, function (message) { reject(message); });
            });
            return promise;
        } else if ((<any>window).isElectron) {
            const originalURL = location.href;
            const authUrl = 'https://login.microsoftonline.com/' + serviceConstants.tenantID +
                '/oauth2/authorize?response_type=id_token&client_id=' + serviceConstants.clientID +
                '&redirect_uri=' + encodeURIComponent(serviceConstants.redirectURL) +
                '&state=' + state + '&nonce=SomeNonce';

            const BrowserWindow = (<any>window).electron.remote.BrowserWindow;

            let authWindow = new BrowserWindow({
                width: 800, height: 600, show: false, frame: false, webPreferences: { nodeIntegration: false }
            });

            authWindow.webContents.on('did-get-redirect-request', (event: any, oldUrl: string, newUrl: string) => {
                const params: any = this.parseQueryString(newUrl);
                if (params['wtrealm']) {
                    const realm: string = params['wtrealm'];
                    if (realm.includes('urn:federation:MicrosoftOnline')) {
                        return;
                    }
                }
                authWindow.destroy();
                if (params['id_token'] != null) {
                    window.localStorage.setItem('id_token', params['id_token']);
                    const accessTokenUrl = 'https://login.microsoftonline.com/' + serviceConstants.tenantID +
                        '/oauth2/authorize?response_type=token&client_id=' + serviceConstants.clientID +
                        '&resource=' + serviceConstants.graphResource +
                        '&redirect_uri=' + encodeURIComponent(serviceConstants.redirectURL) +
                        '&prompt=none&state=' + params['state'] + '&nonce=SomeNonce';

                    let accessWindow = new BrowserWindow({
                        width: 800, height: 600, show: false, frame: false, webPreferences: { nodeIntegration: false }
                    });

                    accessWindow.on('closed', () => {
                        accessWindow = null;
                    });

                    accessWindow.webContents.on('did-get-redirect-request',
                        (accessTokenEvent: any, accessTokenOldUrl: string, accessTokenNewUrl: string) => {
                            accessWindow.destroy();
                            const accessTokenParams: any = this.parseQueryString(accessTokenNewUrl);

                            if (accessTokenParams['access_token'] != null) {
                                window.localStorage.setItem('access_token', accessTokenParams['access_token']);
                                (<any>window).electron.remote.getCurrentWindow().loadURL(accessTokenParams['state']);
                            } else {
                                window.localStorage.removeItem('id_token');
                                window.localStorage.removeItem('access_token');
                            }
                        });
                    accessWindow.loadURL(accessTokenUrl);

                } else {
                    window.localStorage.removeItem('id_token');
                    window.localStorage.removeItem('access_token');
                }
            });

            // reset the authWindow on close
            authWindow.on('closed', () => {
                authWindow = null;
            });

            authWindow.loadURL(authUrl);
            authWindow.show();
        } else {
            window.location.href = 'https://login.microsoftonline.com/' + serviceConstants.tenantID +
                '/oauth2/authorize?response_type=id_token&client_id=' + serviceConstants.clientID +
                '&redirect_uri=' + encodeURIComponent(window.location.href) +
                '&state=' + state + '&nonce=SomeNonce';
        }
    }

    logOut(state = '/') {
        if ((<any>window).isXamarin) {
            const promise = new Promise((resolve, reject) => {
                XamarinBridge.Authentication.Logout().then(result => {
                    resolve(result);
                });
            });
            return promise;
        } else if (serviceConstants.isCordova) {
            const promise = new Promise((resolve, reject) => {
                _authenticationContext.tokenCache.clear();
                resolve(1);
            });
            return promise;
        } else if (serviceConstants.isElectron) {
            window.localStorage.removeItem('id_token');
            window.localStorage.removeItem('access_token');
            (<any>window).electron.remote.getCurrentWindow().loadURL(state);
        } else {
            window.localStorage.removeItem('id_token');
            window.localStorage.removeItem('access_token');
            window.location.href = state;
        }
    }

    refreshAccessToken(state = '/') {
        if (serviceConstants.isCordova) {
            let testUserId = '';
            _authenticationContext.tokenCache.readItems().then(function (cacheItems) {
                if (cacheItems.length > 0) {
                    testUserId = cacheItems[0].userInfo.userId;
                }

                _authenticationContext.acquireTokenSilentAsync(
                    serviceConstants.graphResource,
                    serviceConstants.clientID, testUserId).then(function (authResult) {
                        _authResult = authResult;
                    });
            });
        } else {
            this.logIn(state); // force login, assume that renewToken.html didn't work which is why dev is calling this.
        }
    }

    public getAccessToken(): Promise<string> {
        const promise = new Promise((resolve, reject) => {
            if ((<any>window).isXamarin) {
                XamarinBridge.Authentication.getAccessToken().then(access_token => { resolve(access_token); });
            } else if ((<any>window).isCordova) {
                if (_authResult === undefined) { resolve(null); }
                resolve(_authResult.accessToken);
            } else {
                resolve(window.localStorage.getItem('access_token'));
            }
        });
        return promise;
    }

    public ServiceConstants() {
        return serviceConstants;
    }

    public toString() {
        return 'AzureADAuthHelper';
    }

    public get userName(): Promise<string> {
        const promise = new Promise((resolve, reject) => {
            this.getAccessToken().then(access_token => {
                const jwtHelper = new JwtHelper();
                const parsedToken = jwtHelper.decodeToken(access_token);

                const expiryTime = new Date(parsedToken.exp * 1000);
                const now = new Date();
                if (now > expiryTime) { this.logOut(); };

                resolve(parsedToken.upn);
            });
        });
        return promise;
    }
}

function error(err) {
    console.error(JSON.stringify(err, null, 4));
}
