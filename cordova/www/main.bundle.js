webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: "\n    <a [routerLink]=\"['']\">About</a> | <a [routerLink]=\"['login']\">Login</a> | <a [routerLink]=\"['status']\">Status</a> <br/>  \n    <router-outlet></router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthenticator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__status_status_component__ = __webpack_require__("../../../../../src/app/status/status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngAuth_authenticators_AzureADAuthService__ = __webpack_require__("../../../../../src/app/ngAuth/authenticators/AzureADAuthService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngAuth_AuthenticatedHttpService__ = __webpack_require__("../../../../../src/app/ngAuth/AuthenticatedHttpService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// #docregion










function getAuthenticator() {
    return new __WEBPACK_IMPORTED_MODULE_8__ngAuth_authenticators_AzureADAuthService__["a" /* AzureADAuthService */]();
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ngAuth_AuthenticatedHttpService__["a" /* AuthenticatedHttpService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_8__ngAuth_authenticators_AzureADAuthService__["a" /* AzureADAuthService */],
                    useFactory: getAuthenticator
                }
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__status_status_component__["a" /* StatusComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__status_status_component__ = __webpack_require__("../../../../../src/app/status/status.component.ts");




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'status', component: __WEBPACK_IMPORTED_MODULE_3__status_status_component__["a" /* StatusComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/authsettings.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return serviceConstants; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngAuth_authenticators_AzureADServiceConstants__ = __webpack_require__("../../../../../src/app/ngAuth/authenticators/AzureADServiceConstants.ts");

var serviceConstants = new __WEBPACK_IMPORTED_MODULE_0__ngAuth_authenticators_AzureADServiceConstants__["a" /* AzureADServiceConstants */]('1c623fa4-c6c8-4903-a6aa-67c5ba9a1535', 'winsmartsdev.onmicrosoft.com', 'http://localhost:4200/login', 'https://graph.windows.net');
//# sourceMappingURL=authsettings.config.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: "\n        Simple app demonstrates logging into AzureAD and running a command against the Azure AD graph. <br/> \n        Click the login tab to login, and status tab to view your login status.\n        "
        })
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngAuth_authenticators_AzureADAuthService__ = __webpack_require__("../../../../../src/app/ngAuth/authenticators/AzureADAuthService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    LoginComponent.prototype.logIn = function () {
        // this._authService.logOut('');
        this._authService.logIn('');
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: "\n        <button (click)='logIn()'>\n            Sign In\n        </button>"
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__ngAuth_authenticators_AzureADAuthService__["a" /* AzureADAuthService */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngAuth_authenticators_AzureADAuthService__["a" /* AzureADAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngAuth_authenticators_AzureADAuthService__["a" /* AzureADAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/ngAuth/AuthenticatedHttpService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticatedHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authenticators_AzureADAuthService__ = __webpack_require__("../../../../../src/app/ngAuth/authenticators/AzureADAuthService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AuthenticatedHttpService = /** @class */ (function () {
    function AuthenticatedHttpService(http, authenticator) {
        this._authenticator = authenticator;
        this._http = http;
    }
    AuthenticatedHttpService.prototype.createAuthorizationHeader = function (headers) {
        if (this._authenticator.toString() === 'SessionAuthenticator') {
            return;
        }
        headers.append('Authorization', 'Bearer ' + this._authenticator.getAccessToken());
    };
    AuthenticatedHttpService.prototype.get = function (url) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this._authenticator.getAccessToken().then(function (access_token) {
                headers.append('Authorization', 'Bearer ' + access_token);
                var observable = _this._http.get(url, { headers: headers });
                observable.subscribe(function (res) {
                    resolve(res.json());
                }, function (err) {
                    if (err.status === 401) {
                        _this._authenticator.logIn();
                    }
                    else {
                        reject(err);
                    }
                });
            });
        });
        return promise;
    };
    AuthenticatedHttpService.prototype.post = function (url, data) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this._authenticator.getAccessToken().then(function (access_token) {
                headers.append('Authorization', 'Bearer ' + access_token);
                _this._http.post(url, data, {
                    headers: headers,
                }).subscribe(function (res) {
                    resolve(res.json());
                });
            });
        });
        return promise;
    };
    AuthenticatedHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__authenticators_AzureADAuthService__["a" /* AzureADAuthService */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authenticators_AzureADAuthService__["a" /* AzureADAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authenticators_AzureADAuthService__["a" /* AzureADAuthService */]) === "function" && _b || Object])
    ], AuthenticatedHttpService);
    return AuthenticatedHttpService;
    var _a, _b;
}());

//# sourceMappingURL=AuthenticatedHttpService.js.map

/***/ }),

/***/ "../../../../../src/app/ngAuth/authenticators/AzureADAuthService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AzureADAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authsettings_config__ = __webpack_require__("../../../../../src/app/authsettings.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__XamarinBridge__ = __webpack_require__("../../../../../src/app/ngAuth/authenticators/XamarinBridge/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__JwtHelper__ = __webpack_require__("../../../../../src/app/ngAuth/authenticators/JwtHelper.ts");
/// <reference path='cordova-plugin-ms-adal.d.ts' />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var _authenticationContext;
var _authResult;
var AzureADAuthService = /** @class */ (function () {
    function AzureADAuthService() {
        this.params = this.parseQueryString(location.hash);
        if (window.isCordova || window.isElectron || window.isXamarin) {
            return;
        }
        if (this.params['id_token'] != null) {
            window.localStorage.setItem('id_token', this.params['id_token']);
            // redirect to get access token here..
            window.location.href = 'https://login.microsoftonline.com/' + __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].tenantID +
                '/oauth2/authorize?response_type=token&client_id=' + __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].clientID +
                '&resource=' + __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].graphResource +
                '&redirect_uri=' + encodeURIComponent(window.location.href) +
                '&prompt=none&state=' + this.params['state'] + '&nonce=SomeNonce';
        }
        else if (this.params['access_token'] != null) {
            window.localStorage.setItem('access_token', this.params['access_token']);
            // redirect to the original call URl here.
            window.location.href = decodeURIComponent(this.params['state']);
        }
    }
    AzureADAuthService.prototype.parseQueryString = function (url) {
        var params = {};
        var queryString = '';
        if (url.search('#') !== -1) {
            queryString = url.substring(url.search('#') + 1);
        }
        else {
            queryString = url.substring(url.indexOf('?') + 1);
        }
        var a = queryString.split('&');
        for (var i = 0; i < a.length; i++) {
            var b = a[i].split('=');
            params[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
        }
        return params;
    };
    AzureADAuthService.prototype.isUserAuthenticated = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.getAccessToken().then(function (access_token) {
                resolve(access_token != null && access_token !== '');
            });
        });
        return promise;
    };
    AzureADAuthService.prototype.logIn = function (state) {
        var _this = this;
        if (state === void 0) { state = '/'; }
        if (window.isXamarin) {
            var promise = new Promise(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_2__XamarinBridge__["a" /* XamarinBridge */].Authentication.Login('https://login.windows.net/' + __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].tenantID, __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].graphResource, __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].clientID, __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].redirectURL).then(function (access_token) {
                    resolve(access_token);
                });
            });
            return promise;
        }
        else if (window.isCordova) {
            var promise = new Promise(function (resolve, reject) {
                var authority = 'https://login.windows.net/' + __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].tenantID;
                var _serviceConstants = __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */];
                Microsoft.ADAL.AuthenticationContext.createAsync(authority)
                    .then(function (context) {
                    _authenticationContext = context;
                    _authenticationContext.acquireTokenAsync(_serviceConstants.graphResource, _serviceConstants.clientID, _serviceConstants.redirectURL)
                        .then(function (authResult) {
                        _authResult = authResult;
                        resolve(1);
                    }, function (message) { reject(message); });
                }, function (message) { reject(message); });
            });
            return promise;
        }
        else if (window.isElectron) {
            var originalURL = location.href;
            var authUrl = 'https://login.microsoftonline.com/' + __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].tenantID +
                '/oauth2/authorize?response_type=id_token&client_id=' + __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].clientID +
                '&redirect_uri=' + encodeURIComponent(__WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].redirectURL) +
                '&state=' + state + '&nonce=SomeNonce';
            var BrowserWindow_1 = window.electron.remote.BrowserWindow;
            var authWindow_1 = new BrowserWindow_1({
                width: 800, height: 600, show: false, frame: false, webPreferences: { nodeIntegration: false }
            });
            authWindow_1.webContents.on('did-get-redirect-request', function (event, oldUrl, newUrl) {
                var params = _this.parseQueryString(newUrl);
                if (params['wtrealm']) {
                    var realm = params['wtrealm'];
                    if (realm.includes('urn:federation:MicrosoftOnline')) {
                        return;
                    }
                }
                authWindow_1.destroy();
                if (params['id_token'] != null) {
                    window.localStorage.setItem('id_token', params['id_token']);
                    var accessTokenUrl = 'https://login.microsoftonline.com/' + __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].tenantID +
                        '/oauth2/authorize?response_type=token&client_id=' + __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].clientID +
                        '&resource=' + __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].graphResource +
                        '&redirect_uri=' + encodeURIComponent(__WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].redirectURL) +
                        '&prompt=none&state=' + params['state'] + '&nonce=SomeNonce';
                    var accessWindow_1 = new BrowserWindow_1({
                        width: 800, height: 600, show: false, frame: false, webPreferences: { nodeIntegration: false }
                    });
                    accessWindow_1.on('closed', function () {
                        accessWindow_1 = null;
                    });
                    accessWindow_1.webContents.on('did-get-redirect-request', function (accessTokenEvent, accessTokenOldUrl, accessTokenNewUrl) {
                        accessWindow_1.destroy();
                        var accessTokenParams = _this.parseQueryString(accessTokenNewUrl);
                        if (accessTokenParams['access_token'] != null) {
                            window.localStorage.setItem('access_token', accessTokenParams['access_token']);
                            window.electron.remote.getCurrentWindow().loadURL(accessTokenParams['state']);
                        }
                        else {
                            window.localStorage.removeItem('id_token');
                            window.localStorage.removeItem('access_token');
                        }
                    });
                    accessWindow_1.loadURL(accessTokenUrl);
                }
                else {
                    window.localStorage.removeItem('id_token');
                    window.localStorage.removeItem('access_token');
                }
            });
            // reset the authWindow on close
            authWindow_1.on('closed', function () {
                authWindow_1 = null;
            });
            authWindow_1.loadURL(authUrl);
            authWindow_1.show();
        }
        else {
            window.location.href = 'https://login.microsoftonline.com/' + __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].tenantID +
                '/oauth2/authorize?response_type=id_token&client_id=' + __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].clientID +
                '&redirect_uri=' + encodeURIComponent(window.location.href) +
                '&state=' + state + '&nonce=SomeNonce';
        }
    };
    AzureADAuthService.prototype.logOut = function (state) {
        if (state === void 0) { state = '/'; }
        if (window.isXamarin) {
            var promise = new Promise(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_2__XamarinBridge__["a" /* XamarinBridge */].Authentication.Logout().then(function (result) {
                    resolve(result);
                });
            });
            return promise;
        }
        else if (__WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].isCordova) {
            var promise = new Promise(function (resolve, reject) {
                _authenticationContext.tokenCache.clear();
                resolve(1);
            });
            return promise;
        }
        else if (__WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].isElectron) {
            window.localStorage.removeItem('id_token');
            window.localStorage.removeItem('access_token');
            window.electron.remote.getCurrentWindow().loadURL(state);
        }
        else {
            window.localStorage.removeItem('id_token');
            window.localStorage.removeItem('access_token');
            window.location.href = state;
        }
    };
    AzureADAuthService.prototype.refreshAccessToken = function (state) {
        if (state === void 0) { state = '/'; }
        if (__WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].isCordova) {
            var testUserId_1 = '';
            _authenticationContext.tokenCache.readItems().then(function (cacheItems) {
                if (cacheItems.length > 0) {
                    testUserId_1 = cacheItems[0].userInfo.userId;
                }
                _authenticationContext.acquireTokenSilentAsync(__WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].graphResource, __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */].clientID, testUserId_1).then(function (authResult) {
                    _authResult = authResult;
                });
            });
        }
        else {
            this.logIn(state); // force login, assume that renewToken.html didn't work which is why dev is calling this.
        }
    };
    AzureADAuthService.prototype.getAccessToken = function () {
        var promise = new Promise(function (resolve, reject) {
            if (window.isXamarin) {
                __WEBPACK_IMPORTED_MODULE_2__XamarinBridge__["a" /* XamarinBridge */].Authentication.getAccessToken().then(function (access_token) { resolve(access_token); });
            }
            else if (window.isCordova) {
                if (_authResult === undefined) {
                    resolve(null);
                }
                resolve(_authResult.accessToken);
            }
            else {
                resolve(window.localStorage.getItem('access_token'));
            }
        });
        return promise;
    };
    AzureADAuthService.prototype.ServiceConstants = function () {
        return __WEBPACK_IMPORTED_MODULE_1__authsettings_config__["a" /* serviceConstants */];
    };
    AzureADAuthService.prototype.toString = function () {
        return 'AzureADAuthHelper';
    };
    Object.defineProperty(AzureADAuthService.prototype, "userName", {
        get: function () {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
                _this.getAccessToken().then(function (access_token) {
                    var jwtHelper = new __WEBPACK_IMPORTED_MODULE_3__JwtHelper__["a" /* JwtHelper */]();
                    var parsedToken = jwtHelper.decodeToken(access_token);
                    var expiryTime = new Date(parsedToken.exp * 1000);
                    var now = new Date();
                    if (now > expiryTime) {
                        _this.logOut();
                    }
                    ;
                    resolve(parsedToken.upn);
                });
            });
            return promise;
        },
        enumerable: true,
        configurable: true
    });
    AzureADAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AzureADAuthService);
    return AzureADAuthService;
}());

function error(err) {
    console.error(JSON.stringify(err, null, 4));
}
//# sourceMappingURL=AzureADAuthService.js.map

/***/ }),

/***/ "../../../../../src/app/ngAuth/authenticators/AzureADServiceConstants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AzureADServiceConstants; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AzureADServiceConstants = /** @class */ (function () {
    function AzureADServiceConstants(clientID, tenantID, redirectURL, backendUrl, graphResource, isCordova, isElectron) {
        if (graphResource === void 0) { graphResource = 'https://graph.windows.net'; }
        if (isCordova === void 0) { isCordova = false; }
        if (isElectron === void 0) { isElectron = false; }
        this.clientID = clientID;
        this.tenantID = tenantID;
        this.redirectURL = redirectURL;
        this.backendUrl = backendUrl;
        this.graphResource = graphResource;
        this.isCordova = isCordova;
        this.isElectron = isElectron;
    }
    AzureADServiceConstants = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [String, String, String, String, Object, Object, Object])
    ], AzureADServiceConstants);
    return AzureADServiceConstants;
}());

//# sourceMappingURL=AzureADServiceConstants.js.map

/***/ }),

/***/ "../../../../../src/app/ngAuth/authenticators/JwtHelper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtHelper = /** @class */ (function () {
    function JwtHelper() {
    }
    JwtHelper.prototype.urlBase64Decode = function (str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                // tslint:disable-next-line:no-string-throw
                throw 'Illegal base64url string!';
        }
        return decodeURIComponent(window.escape(window.atob(output)));
    };
    JwtHelper.prototype.decodeToken = function (token) {
        if (token === void 0) { token = ''; }
        if (token === null || token === '') {
            return { 'upn': '' };
        }
        var parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }
        var decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    };
    JwtHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], JwtHelper);
    return JwtHelper;
}());

//# sourceMappingURL=JwtHelper.js.map

/***/ }),

/***/ "../../../../../src/app/ngAuth/authenticators/XamarinBridge/Authentication.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Authentication; });
var Authentication = /** @class */ (function () {
    function Authentication() {
    }
    Authentication.Login = function (authority, resourceUri, clientID, returnUri) {
        return window.invokeXamarinAction("{\n            'Library': 'Authentication',\n            'Action': 'Login',\n            'Parameters': {\n                'authority': '" + authority + "',\n                'resourceUri': '" + resourceUri + "',\n                'clientID': '" + clientID + "',\n                'returnUri': '" + returnUri + "'\n            }\n        }");
    };
    Authentication.Logout = function () {
        return window.invokeXamarinAction("{\n            'Library': 'Authentication',\n            'Action': 'Logout',\n            'Parameters': {\n            }\n        }");
    };
    Authentication.getAccessToken = function () {
        return window.invokeXamarinAction("{\n            'Library': 'Authentication',\n            'Action': 'GetAccessToken',\n            'Parameters': {\n            }\n        }");
    };
    return Authentication;
}());

//# sourceMappingURL=Authentication.js.map

/***/ }),

/***/ "../../../../../src/app/ngAuth/authenticators/XamarinBridge/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XamarinBridge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Authentication__ = __webpack_require__("../../../../../src/app/ngAuth/authenticators/XamarinBridge/Authentication.ts");

var XamarinBridge = {
    'Authentication': __WEBPACK_IMPORTED_MODULE_0__Authentication__["a" /* Authentication */],
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/status/status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngAuth_AuthenticatedHttpService__ = __webpack_require__("../../../../../src/app/ngAuth/AuthenticatedHttpService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngAuth_authenticators_AzureADAuthService__ = __webpack_require__("../../../../../src/app/ngAuth/authenticators/AzureADAuthService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// #docregion



var StatusComponent = /** @class */ (function () {
    function StatusComponent(_authService, _authenticatedHttpService) {
        var _this = this;
        this._authService = _authService;
        this._authenticatedHttpService = _authenticatedHttpService;
        this._userData = { 'intialValue': 'Data will show here once you press RunCommand' };
        this.currentUserName = '';
        if (window.isCordova || window.isXamarin) {
            document.addEventListener('resume', function () {
                setTimeout(function () {
                    _this._authService.userName.then(function (userName) { _this.currentUserName = userName; });
                }, 1000);
            }, false);
        }
        this._authService.userName.then(function (userName) { _this.currentUserName = userName; });
    }
    StatusComponent.prototype.logOut = function () {
        this._authService.logOut('');
    };
    StatusComponent.prototype.runCommand = function () {
        var _this = this;
        this._authenticatedHttpService.get('https://graph.windows.net/me?api-version=1.6').then(function (results) {
            _this._userData = results;
        });
        // this._authenticatedHttpService.get("https://graph.microsoft.com/v1.0/me/drive/recent").subscribe((results => {
        //     this._files = results.json().value;
        // }));
    };
    StatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: "\n        <div *ngIf=\"currentUserName\">\n                userName: {{currentUserName}}\n                <br/>\n                <button (click)=\"logOut()\">Logout</button>\n                <br/>\n                <button (click)=\"runCommand()\">\n                    Run Command\n                </button>\n                <pre>{{_userData | json}}</pre>\n        </div>\n        <div *ngIf=\"!currentUserName\">\n            User is not signed in.\n        </div>\n        "
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__ngAuth_authenticators_AzureADAuthService__["a" /* AzureADAuthService */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngAuth_authenticators_AzureADAuthService__["a" /* AzureADAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngAuth_authenticators_AzureADAuthService__["a" /* AzureADAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngAuth_AuthenticatedHttpService__["a" /* AuthenticatedHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngAuth_AuthenticatedHttpService__["a" /* AuthenticatedHttpService */]) === "function" && _b || Object])
    ], StatusComponent);
    return StatusComponent;
    var _a, _b;
}());

//# sourceMappingURL=status.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map