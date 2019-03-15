import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents } from './app-routing.module'; // imported app routing module
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponentComponent,
  ],
  imports: [
    BrowserModule ,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
