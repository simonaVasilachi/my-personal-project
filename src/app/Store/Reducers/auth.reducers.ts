import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../Actions/auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  authenticated: boolean;
}

export const initialAuthState: AuthState = {
  authenticated: false,
};

const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.authenticationSuccess, (state: AuthState, action: Action) => {
    return {
      ...state,
      authenticated: (action as any).auth,
    };
  }),
  on(AuthActions.logout, (state: AuthState, action: Action) => {
    return {
      ...state,
      authenticated: false,
    };
  })
);

export function authreducer(state: AuthState, action: Action) {
  return authReducer(state, action);
}
