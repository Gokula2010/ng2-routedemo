import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent } from './components/heroes/hero-list.component';
import { CrisisListComponent } from './components/crisis-center/crisis-list.component';

const appRoutes: Routes = [
  { path: 'heroes', component: HeroListComponent },
  { path: 'crisis-center', component: CrisisListComponent }
];

export const appRoutingProviders : any[] = [ 

];

export const routing = RouterModule.forRoot(appRoutes);
