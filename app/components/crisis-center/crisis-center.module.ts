import { NgModule } from '@angular/core';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';

import { crisisCenterRouting } from './crisis-center.routing';

@NgModule( {
    imports: [
        crisisCenterRouting
    ],
    declarations : [
        CrisisCenterComponent,
        CrisisListComponent,
        CrisisDetailComponent
    ]
})
export class CrisisCenterModule { }