import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    template: `
    <a [routerLink]="['']">About</a> | <a [routerLink]="['login']">Login</a> | <a [routerLink]="['status']">Status</a> <br/>  
    <router-outlet></router-outlet>`
})

export class AppComponent { }