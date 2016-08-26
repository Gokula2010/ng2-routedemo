import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { routing, appRoutingProviders  } from './app.routing';


import { HeroesModule } from './components/heroes/heroes.module';

import { CrisisCenterModule } from './components/crisis-center/crisis-center.module';

import { CrisisListComponent } from './components/crisis-center/crisis-list.component';



@NgModule({
  imports: [ 
    BrowserModule,
    routing,
    HeroesModule,
    CrisisCenterModule
  ],
  declarations: [ 
    AppComponent
    //CrisisListComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
