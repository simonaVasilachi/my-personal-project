import { NgModule } from '@angular/core';
import { LoginRoutingModule } from '../../Routing/login-routing.module';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
  
    LoginRoutingModule,
    MatCardModule
  ],
  declarations: [],
  exports: []
})
export class LoginViewModule { }