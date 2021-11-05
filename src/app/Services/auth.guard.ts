import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }
  
  canActivateChild(): boolean {
    const isAuth =  this.authService.login();
    if(isAuth) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

  canActivate(): boolean {
    const isAuth = this.authService.login();
    if (isAuth) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
