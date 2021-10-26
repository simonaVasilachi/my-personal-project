import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../Views/app.component';
import { LoginModule } from '../Views/login.component/login.module';
import { LoginComponent } from '../Views/login.component/login.component';
import { UserInfo } from '../Entities/userInfo.model';
import { UserListComponent } from '../Entities/userList.component';
import { RouterEffects } from '../Services/route.effects';
import { userReducer } from '../Services/user.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent}
  // { path: '', component: UserListComponent }
  
];

@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
    LoginModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({user: userReducer}),
    AppRoutingModule,
    EffectsModule.forRoot([RouterEffects]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule
    
    ],

  declarations: [
    UserListComponent,
    AppComponent, //LoginComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
