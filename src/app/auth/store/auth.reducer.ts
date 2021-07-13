
import { User } from '../user.modal';
import * as AuthActions from '../store/auth.action';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.AUTHENTICATE_SUCESS:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.ExpirationDate
      );
      return {
        ...state,
        authError: null,
        user: user,
        loading: false
      };
    case AuthActions.LOGOUt:
      return {
        ...state,
        user: null
      };
    case AuthActions.LOGIN_START:
      case AuthActions.SIGNUP_START:
      return {
        ...state,
        authError: null,
        loading: true
      };
    case AuthActions.AUTHENTICATE_FAIL:
      return {
        ...state,
        user: null,
        authError: action.payload,
        loading: false
      };
      case AuthActions.CLEAR_ERROR:
      return {
        ...state,
        user: null,
        authError: null,

      };
      case AuthActions.AUTO_LOGIN:
        return {
          ...state,
          user: null,
          authError: null,

        };
    default:
      return state;
  }
}