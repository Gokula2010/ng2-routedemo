import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'crisis-list',
    template: 
    `
    <h2>Crisis Center - List</h2>
     <p>Get your Crisis detail here</p>
     <span (click)="onSelect()">Click Me</span>
    
    `
})
export class CrisisListComponent implements OnInit {
    constructor(private _router: Router) { }


    ngOnInit() { }

     onSelect() {
        this._router.navigate(['/crisis-center', 1]);
    }
}