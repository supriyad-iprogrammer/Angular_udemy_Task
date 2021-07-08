import * as AuthActions from './auth.action';
import { User } from './../user.modal';

export interface State{
  user:User;
  authError:string;
  loading:boolean;
}
const initialState:State={
  user:null,
  authError:null,
  loading:false
};

export function authReducer(state=initialState, action:AuthActions.AuthActions){
switch (action.type){
  case AuthActions.LOGIN:
    const user=new User(action.payload.email,
      action.payload.id,
      action.payload.token,
      action.payload.ExpirationDate);

      return {
        ...state,
        authError:null,
        user:user,
        loading:false
      }
  case AuthActions.LOGOUt:
    return {
      ...state,
      user:null
    }
    case AuthActions.LOGIN_START:
      return{
...state,
authError:null,
loading:true
      }
      case AuthActions.LOGIN_FAIL:
        return{
  ...state,
  user:null,
  authError:action.payload,
  loading:false
        }
    default:
      return state
}
}
