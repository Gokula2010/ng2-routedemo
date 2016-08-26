import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'crisis-detail',
    template: 
    `
        <h1>crisis-detail.component.html</h1>
        <a routerLink="/crisis-center">Crisis List</a>
    `
})
export class CrisisDetailComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}