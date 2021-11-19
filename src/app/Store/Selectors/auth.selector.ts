import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, AuthState } from '../Reducers/auth.reducers';

export const authState = createFeatureSelector<AuthState>(authFeatureKey);

export const isAuth = createSelector(
  authState,
  (state: AuthState) =>  true //state.authenticated
);
