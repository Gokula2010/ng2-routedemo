import { Routes, RouterModule } from '@angular/router';

import { CrisisListComponent } from './components/crisis-center/crisis-list.component';

import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
const appRoutes: Routes = [
  //{ path: 'crisis-center', component: CrisisListComponent }
  { path:'login', component: LoginComponent },
  //{ path: '', component: NavbarComponent, canActivate: [AuthGuardService] },
//{ path:'login', component: LoginComponent },
  { path: '**', redirectTo: 'login'}
];

export const appRoutingProviders : any[] = [ 
  AuthService,
  AuthGuardService
];

export const routing = RouterModule.forRoot(appRoutes);
