import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras }      from '@angular/router';
import { AuthService }      from '../../services/auth.service';


@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    message: string;
    model: User;
    errorMsg: string;

    constructor(private _authService: AuthService, private _router: Router) { 
        this.model = new User('', '');
    }

    ngOnInit() { }

    onLogin() {
        this._authService.login().subscribe(() =>{
            if(this._authService.isLoggedIn) {
                let redirect = this._authService.redirectUrl ? this._authService.redirectUrl : '/heroes';
                let navigationExtras: NavigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment : true
                };
                this._router.navigate([redirect], navigationExtras);
            }
        })
    }

    onLogout() {
        this._authService.logout();
    }

}


export class User {
    constructor(public username: string, public password: string) {

    }
}   