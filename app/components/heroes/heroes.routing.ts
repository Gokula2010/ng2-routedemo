import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { AuthGuardService } from '../../services/auth-guard.service';
const heroRoutes: Routes = [
  { path: 'heroes', component: HeroListComponent, canActivate: [AuthGuardService]  },
  { path: 'hero/:id', component: HeroDetailComponent, canActivate: [AuthGuardService]  }
  //{ path: '', component: HeroListComponent },

];

export const heroesRouting = RouterModule.forChild(heroRoutes);

