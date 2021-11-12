import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserInterface } from '../Entities/user.interface';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UsersService) {}

  login(
    emailFormControl: string,
    passwordFormControl: string
  ): Observable<boolean> {
    return this.userService.getUser(emailFormControl).pipe(
      map((user: UserInterface) => {
        if (user) {
          return user.password === passwordFormControl;
        } else {
          return false;
        }
      })
    );
  }
}
