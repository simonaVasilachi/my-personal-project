import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

=======
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
>>>>>>> 63f15c8 (login works if password and email match with the ones from db.json)
import { UserInterface } from '../Entities/user.interface';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UsersService, private router: Router) {}

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

  logout(url: string) {
    this.router.navigateByUrl(url);
  }
}
