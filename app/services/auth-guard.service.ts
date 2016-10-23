import { Injectable } from '@angular/core';

import { CanActivate, Router,
        ActivatedRouteSnapshot,
        RouterStateSnapshot,
        NavigationExtras } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable() 
export class AuthGuardService implements CanActivate {
    constructor(private _router: Router, private _authService: AuthService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
        if(this._authService.isLoggedIn) {
            return true;
        }

        this._authService.redirectUrl = state.url;
        console.log('state.url : ' + state.url);
        let sessionId = 123456789;
        let navigationExtras: NavigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
        };
        this._router.navigate(['/login']);

        return false;

    }

}

