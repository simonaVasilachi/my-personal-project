import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { SnackbarService } from 'src/app/Services/snackbar.service';
import { snackbarFail, snackbarInfo, SNACKBARSTATUS, snackbarSuccess } from '../Actions/snack-bar.actions';

@Injectable()
export class SnackBarEffects {
  constructor(
    private actions$: Actions,
    private snackbarService: SnackbarService
  ) {}

  snackbarSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(snackbarSuccess),
        tap((action) => this.snackbarService.showNotification(action.message, SNACKBARSTATUS.SUCCESS))
      ),
     { dispatch: false }
  );

  snackbarFail$ = createEffect(
    () => 
    this.actions$.pipe(
      ofType(snackbarFail),
      tap((action) => this.snackbarService.showNotification(action.message, SNACKBARSTATUS.ERROR))
    ),
     { dispatch: false }
  )


  snackbarInfo$ = createEffect(
    () => 
    this.actions$.pipe(
      ofType(snackbarInfo),
      tap((action) => this.snackbarService.showNotification(action.message, SNACKBARSTATUS.INFO))
    ),
     { dispatch: false }
  )
}
