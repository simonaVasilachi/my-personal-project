import { createAction, props } from '@ngrx/store';

export const authentication = createAction(
  '[Authentification] authentication',
  props<{ email: string; password: string }>()
);

export const authenticationSuccess = createAction(
  '[Authentification] authenticationSuccess',
  props<{ auth: boolean }>()
);

export const authenticationFailed = createAction(
  '[Authentification] authenticationFaild'
);

export const logout = createAction(
  '[Authentification] logout',
  props<{ url: string }>()
);
