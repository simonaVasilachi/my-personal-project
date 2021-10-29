import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../Views/app.component';
import { UserListComponent } from '../Entities/userList.component';
import { RouterEffects } from '../Services/route.effects';
import { userReducer } from '../Services/user.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot({ user: userReducer }),
    AppRoutingModule,
    EffectsModule.forRoot([RouterEffects]),
    BrowserAnimationsModule,
    MatToolbarModule

  ],

  declarations: [
    UserListComponent,
    AppComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
