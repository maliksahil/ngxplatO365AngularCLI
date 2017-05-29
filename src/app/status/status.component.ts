// #docregion
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticatedHttpService } from '../ngAuth/AuthenticatedHttpService';
import { AzureADAuthService } from '../ngAuth/authenticators/AzureADAuthService';


@Component({
    template: `
        <div *ngIf="currentUserName">
                userName: {{currentUserName}}
                <br/>
                <button (click)="logOut()">Logout</button>
                <br/>
                <button (click)="runCommand()">
                    Run Command
                </button>
                <pre>{{_userData | json}}</pre>
        </div>
        <div *ngIf="!currentUserName">
            User is not signed in.
        </div>
        `
})

export class StatusComponent {
    private _userData: Object = { 'intialValue': 'Data will show here once you press RunCommand' };
    currentUserName = '';
    constructor(
        @Inject(AzureADAuthService) private _authService: AzureADAuthService,
        private _authenticatedHttpService: AuthenticatedHttpService) {
        if ((<any>window).isCordova || (<any>window).isXamarin) {
            document.addEventListener('resume', () => {
                setTimeout(() => {
                    this._authService.userName.then(userName => { this.currentUserName = userName; });
                }, 1000);
            }, false);
        }
        this._authService.userName.then(userName => { this.currentUserName = userName; });
    }

    logOut() {
        this._authService.logOut('');
    }

    runCommand() {
        this._authenticatedHttpService.get('https://graph.windows.net/me?api-version=1.6').then(results => {
            this._userData = results;
        });
        // this._authenticatedHttpService.get("https://graph.microsoft.com/v1.0/me/drive/recent").subscribe((results => {
        //     this._files = results.json().value;
        // }));
    }
}
