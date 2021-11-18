import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './Routing/app-routing.module';
import { AppComponent } from './Views/app-view/app.component';
import { AppStoreModule } from './Store/app.store';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppStoreModule,
    MatSnackBarModule
  ],

  declarations: [AppComponent],

  bootstrap: [AppComponent],
})
export class AppModule {}
