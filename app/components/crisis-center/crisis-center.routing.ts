import { Routes, RouterModule } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';

import { AuthGuardService }from '../../services/auth-guard.service';

const crisisCenterRoutes: Routes = [
    {
        path: 'crisis-center', 
        component: CrisisCenterComponent, 
        canActivate: [AuthGuardService],
        children: [
            { path: ':id', component: CrisisDetailComponent },
            { path: '', component: CrisisListComponent },
        ]
    }
];

export const crisisCenterRouting = RouterModule.forChild(crisisCenterRoutes);
