import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, tap } from 'rxjs/operators';

import { AuthService } from 'src/app/Services/auth.service';
import { authentication, authenticationFailed, authenticationSuccess, logout } from '../Actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private authService: AuthService, private actions$: Actions) {}

  auth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authentication),
      switchMap((action) =>
        this.authService.login(action.email, action.password)
      ),
      switchMap((isAuth: boolean) =>
        isAuth
          ? [authenticationSuccess({ auth: isAuth })]
          : [authenticationFailed()]
      )
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap((action) => this.authService.logout(action.url))
      ),
    { dispatch: false }
  );
}
