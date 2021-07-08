
import { Action } from "@ngrx/store";
export const LOGIN_START = 'LOGIN_START';
export const LOGIN = 'LOGIN';
export const LOGOUt = 'LOGOUT';
export const LOGIN_FAIL = 'LOGIN_FAIL'
export class Login implements Action {
  readonly type = LOGIN;
  constructor(
    public payload: {
      email: string;
      id: string;
      token: string;
      ExpirationDate: Date;
    }
  ) {

  }
}

export class Logout implements Action {
  readonly type = LOGOUt;
}
export class LoginStart implements Action {
  readonly type = LOGIN_START;
  constructor(public payload: { email: string, password: string }) {

  }
}
export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload: string) { }
}
export type AuthActions = Login | Logout | LoginStart | LoginFail;
