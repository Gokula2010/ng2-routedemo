import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'hero-list',
    template: 
    `
    <h2>HEROES</h2>
     <p>Get your heroes here</p>
     <span (click)="onSelect()">Click Me</span>
    `
})
export class HeroListComponent implements OnInit {
    constructor(private _router: Router) { }

    ngOnInit() { }

    onSelect() {
        this._router.navigate(['/hero', 1]);
    }
}