import {AuthState, initialAuthState } from './Reducers/auth.reducers';

import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AuthStoreModule } from './Features/auth.store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

export interface AppState {
    auth: AuthState
}

export const initialAppState: AppState  = {
    auth: initialAuthState
}


@NgModule({
    imports: [
        EffectsModule.forRoot(),
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
          }),
        AuthStoreModule
    ],
    exports: [StoreModule]
})
export class AppStoreModule {
}

