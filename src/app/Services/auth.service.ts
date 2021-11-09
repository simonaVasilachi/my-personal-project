import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserInterface } from '../Entities/user.interface';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private isAuth: boolean = true;

  constructor(private userService: UsersService) {}

  login( emailFormControl: string, passwordFormControl: string ): Observable<UserInterface[]> {
    //console.log();

    return this.userService.getUsers().pipe(
      map((users) =>
        users.filter(
          (user) =>
            user.email === emailFormControl &&
            user.password === passwordFormControl
        )
      ),
      tap((users) =>
        users.length ? (this.isAuth = true) : (this.isAuth = false)
      )
    );
    
  }

  isUserAuth() {
    return this.isAuth;
  }
}
