import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Menu } from '../components/navbar/menu';
@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    redirectUrl: string;
    menus: Menu[] = [];

    constructor() { }

    login() {
        console.log(this.isLoggedIn);
        return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }

    logout() {
        this.isLoggedIn = false;
    }

    getMenus() {
        this.menus.push({id:1, name:'Hero', displayName: 'Hero', url: '/heroes'});
        this.menus.push({id:2, name:'Crisis Center', displayName: 'Crisis Center', url: '/crisis-center'});
        return this.menus;
    }
}