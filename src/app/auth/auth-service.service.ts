import { AuthenticateSuccess } from './store/auth.action';
import { Store } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { User } from './user.modal';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, BehaviorSubject, Subject } from 'rxjs';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.action'
export interface AuthResposeData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
// user = new BehaviorSubject<User>(null);
private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router:Router,private store:Store<fromApp.AppState>) { }
//   signup(email: string, password: string) {
//     return this.http.post<AuthResposeData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZ4akeAmSGzzOv1QKe8PTC4uJnmI118k0',
//       {
//         email: email,
//         password: password,
//         returnSecureToken: true
//       }).pipe(catchError(this.handleErroe), tap(
//         respose => {
//           this.handleAuthentication(respose.email, respose.localId, respose.idToken, +respose.expiresIn)
//         }
//       ))
//   }

//   login(email: string, password: string) {
//     return this.http.post<AuthResposeData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZ4akeAmSGzzOv1QKe8PTC4uJnmI118k0', {
//       email: email,
//       password: password,
//       returnSecureToken: true
//     })
//     .pipe(catchError(this.handleErroe), tap(
//       respose => {
//         this.handleAuthentication(respose.email,
//           respose.localId,
//            respose.idToken,
//            +respose.expiresIn)
//       }
//     ));
//   }

//   autoLogin(){
//     const userData: {
//       email: string;
//       id: string;
//       _token: string;
//       _tokenExpirationDate: string;
//     }= JSON.parse(localStorage.getItem('userData'));
//       if(!userData){
//         return;
//       }
//       const loadedUser=new User(
//         userData.email,
//         userData.id,
//         userData._token,
//         new Date(userData._tokenExpirationDate)
//       );
//       if (loadedUser.token) {
//         // this.user.next(loadedUser);
//         this.store.dispatch(new AuthActions.AuthenticateSuccess({email:loadedUser.email,userId:loadedUser.email,token:loadedUser.token,ExpirationDate:new Date(userData._tokenExpirationDate)}))
//         const expirationDuration =
//           new Date(userData._tokenExpirationDate).getTime() -
//           new Date().getTime();
//         this.autoLogout(expirationDuration);
//       }

//   }
//   logOut(){
//     // this.user.next(null);
//     this.store.dispatch(new AuthActions.Logout())
//     // this.router.navigate(['/auth']);
//     localStorage.removeItem('userData');
//     if(this.tokenExpirationTimer){
//       clearTimeout(this.tokenExpirationTimer);
//     }
//     this.tokenExpirationTimer=null;
//   }
//
//   private handleAuthentication(
//     email: string,
//      userId: string,
//      token: string,
//      expireIn: number) {
//     const ExirationDate = new Date(new Date().getTime() + expireIn * 1000);
//     const user = new User(email, userId, token, ExirationDate);
//     // this.user.next(user);
//     this.store.dispatch(new AuthActions.AuthenticateSuccess({email:email,userId:userId,token:token,ExpirationDate:ExirationDate}))
//     this.autoLogout(expireIn * 1000);
//     localStorage.setItem('userData', JSON.stringify(user));
//   }
//   private handleErroe(errorRes: HttpErrorResponse) {
//     let errorMessage = 'An Error Occurred!!!';
//     if (!errorRes.error || !errorRes.error.error) {
//       return throwError(errorMessage)
//     }
//     switch (errorRes.error.error.message) {
//       case 'EMAIL_NOT_FOUND':
//         errorMessage = "There is no user record corresponding to this identifier";
//         break;
//       case 'INVALID_PASSWORD':
//         errorMessage = "The password is invalid";
//         break;
//       case 'USER_DISABLED':
//         errorMessage = "The user account has been disabled by an administrator.";
//     }
//     return throwError(errorMessage)
//   }
setLogoutTimer(expirationDuration: number) {
  this.tokenExpirationTimer = setTimeout(() => {
    this.store.dispatch(new AuthActions.Logout());
  }, expirationDuration);
}

clearLogoutTimer() {
  if (this.tokenExpirationTimer) {
    clearTimeout(this.tokenExpirationTimer);
    this.tokenExpirationTimer = null;
  }
}
}

