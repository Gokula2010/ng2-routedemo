import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { routing, appRoutingProviders  } from './app.routing';

import { HeroListComponent } from './components/heroes/hero-list.component';
import { CrisisListComponent } from './components/crisis-center/crisis-list.component';

@NgModule({
  imports: [ 
    BrowserModule,
    routing 
  ],
  declarations: [ 
    AppComponent,
    HeroListComponent,
    CrisisListComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
