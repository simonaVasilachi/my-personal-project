import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './Routing/app-routing.module';
import { AppComponent } from './Views/app-view/app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule

],

  declarations: [
    AppComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
