import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { LoginRoutingModule } from '../../Routing/login-routing.module';
import { UsersAPI } from '../../Repositories/users-api.model';
import { UsersService } from '../../Services/users.service';

@NgModule({
  imports: [LoginRoutingModule, MatCardModule],
  declarations: [],
  exports: [],
  providers: [UsersAPI, UsersService],
})
export class LoginViewModule {}
