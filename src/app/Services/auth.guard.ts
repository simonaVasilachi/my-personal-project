import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { isAuth } from '../Store/Selectors/auth.selector';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private store: Store
  ) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(isAuth),
      map((isAuth: boolean) => {
        if (!isAuth) {
          this.router.navigateByUrl('/');
          return false;
        }
        return isAuth;
      })
    );
  }

  canActivateChild(): Observable<boolean> {
    return this.store.pipe(
      select(isAuth),
      map((isAuth: boolean) => {
        if (!isAuth) {
          this.router.navigateByUrl('/');
          return false;
        }
        return isAuth;
      })
    );
  }
}
