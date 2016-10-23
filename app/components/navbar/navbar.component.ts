import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Menu } from './menu';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {
    menus: Menu[] = [
        //{id:1, name:'Hero', displayName: 'Hero', url: '/heroes'},
        //{id:1, name:'Crisis Center', displayName: 'Crisis Center', url: '/crisis-center'}
    ];


    constructor(private _authService: AuthService ) { 
         //console.log(JSON.stringify(this.menus));
    }

    ngOnInit() {
        // this.menus.push({id:1, name:'Hero', displayName: 'Hero', url: '/heroes'});
        // this.menus.push({id:2, name:'Crisis Center', displayName: 'Crisis Center', url: '/crisis-center'});
        console.log('Navbar Init');
    }
}

