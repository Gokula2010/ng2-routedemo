import { NgModule } from '@angular/core';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { heroesRouting } from './heroes.routing';

@NgModule({
    imports: [
        heroesRouting
    ],
    declarations: [
        HeroListComponent,
        HeroDetailComponent
    ],
    providers: [],
})
export class HeroesModule { }
