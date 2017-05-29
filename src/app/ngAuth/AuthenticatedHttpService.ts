import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AzureADAuthService } from './authenticators/AzureADAuthService';

@Injectable()
export class AuthenticatedHttpService {
  private _authenticator: AzureADAuthService;
  private _http: Http;
  constructor( @Inject(Http) http: Http, @Inject(AzureADAuthService) authenticator: AzureADAuthService) {
    this._authenticator = authenticator;
    this._http = http;
  }

  createAuthorizationHeader(headers: Headers) {
    if (this._authenticator.toString() === 'SessionAuthenticator') { return; }
    headers.append('Authorization', 'Bearer ' + this._authenticator.getAccessToken());
  }

  get(url) {
    const promise = new Promise((resolve, reject) => {
      const headers = new Headers();
      this._authenticator.getAccessToken().then(access_token => {
        headers.append('Authorization', 'Bearer ' + access_token);
        const observable = this._http.get(url, { headers: headers });
        observable.subscribe(
          res => {
            resolve(res.json());
          },
          err => {
            if (err.status === 401) {
              this._authenticator.logIn();
            } else { reject(err); }
          });
      });
    });
    return promise;
  }

  post(url, data) {
    const promise = new Promise((resolve, reject) => {
      const headers = new Headers();
      this._authenticator.getAccessToken().then(access_token => {
        headers.append('Authorization', 'Bearer ' + access_token);
        this._http.post(url, data, {
          headers: headers,
        }).subscribe(res => {
          resolve(res.json());
        });
      });
    });
    return promise;
  }
}
