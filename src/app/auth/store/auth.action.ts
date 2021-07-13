import { Action } from '@ngrx/store';
export const LOGIN_START = 'LOGIN_START';
export const AUTHENTICATE_SUCESS = 'LOGIN';
export const LOGOUt = 'LOGOUT';
export const SIGNUP_START='[Auth] Signup start'
export const CLEAR_ERROR='[Auth] Clear Error'

export const AUTHENTICATE_FAIL = 'LOGIN_FAIL';
export const AUTO_LOGIN = '[Auth] Auto Login';
export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCESS;
  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      ExpirationDate: Date;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = LOGOUt;
}
export class LoginStart implements Action {
  readonly type = LOGIN_START;
  constructor(public payload: { email: string; password: string }) {}
}
export class AuthenticateFail implements Action {
  readonly type = AUTHENTICATE_FAIL;
  constructor(public payload: string) {}
}
export class SignupStart implements Action {
  readonly type = SIGNUP_START;
  constructor(public payload: { email: string; password: string }) {}
}
export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
 }
 export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
 }
export type AuthActions = AuthenticateSuccess | Logout | LoginStart | AuthenticateFail|SignupStart | ClearError |AutoLogin;
