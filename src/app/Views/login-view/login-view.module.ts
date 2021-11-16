import { NgModule } from '@angular/core';
import { LoginRoutingModule } from '../../Routing/login-routing.module';
import { MatCardModule } from '@angular/material/card';
import { UsersAPI } from 'src/app/Repositories/users-api.model';
import { UsersService } from 'src/app/Services/users.service';

@NgModule({
  imports: [LoginRoutingModule, MatCardModule],
  declarations: [],
  exports: [],
  providers: [UsersAPI, UsersService],
})
export class LoginViewModule {}
