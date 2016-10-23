import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';

import { routing, appRoutingProviders  } from './app.routing';

import { NavbarModule } from './components/navbar/navbar.module';

import { HeroesModule } from './components/heroes/heroes.module';
import { CrisisCenterModule } from './components/crisis-center/crisis-center.module';

import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';




@NgModule({
  imports: [ 
    BrowserModule,
    routing,
    FormsModule,
    //NavbarModule,
    HeroesModule,
    CrisisCenterModule
  ],
  declarations: [ 
    AppComponent
    //CrisisListComponent
    //,NavbarComponent
    , NavbarComponent
    , LoginComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
