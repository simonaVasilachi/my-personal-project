import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { navigate } from "./route.actions";
//import { tap } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class RouterEffects {
    constructor(
        private actions$: Actions,
        private router: Router
    ) { }

    // navigate$ = createEffect(
    //     () => this.actions$.pipe(
    //         ofType(navigate),
    //         tap((action) => this.router.navigate(['/${action.url}'], {skipLocationChange: false}))
    //     ),
    //     { dispatch: false }
    // )
}

