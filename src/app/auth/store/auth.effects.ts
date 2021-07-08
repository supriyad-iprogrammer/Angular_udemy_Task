// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import * as AuthActions from './auth.action';
// import { Injectable } from '@angular/core';
// import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
// import { switchMap, catchError, map, tap } from 'rxjs/operators';
// import { of } from 'rxjs';


// export interface AuthResposeData {
//   kind: string;
//   idToken: string;
//   email: string;
//   refreshToken: string;
//   expiresIn: string;
//   localId: string;
//   registered?: boolean
// }
// @Injectable()
// export class AuthEffects {


//   @Effect()
//   authLogin = this.actions$.pipe(ofType(AuthActions.LOGIN_START),
//   switchMap((authData:AuthActions.LoginStart)=>{
//         return this.http.post<AuthResposeData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZ4akeAmSGzzOv1QKe8PTC4uJnmI118k0', {
//       email: authData.payload.email,
//       password: authData.payload.password,
//       returnSecureToken: true
//     }).pipe(map(resData=>{
//       const ExirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);

//       return of(new AuthActions.Login({
//         email: resData.email,
//         id: resData.localId,
//         token: resData.idToken,
//         ExpirationDate: ExirationDate
//       }));
//     }),
//     catchError(errorRes => {
//       let errorMessage = 'An unknown error occurred!';
//       if (!errorRes.error || !errorRes.error.error) {
//         return of(new AuthActions.LoginFail(errorMessage));
//       }
//       switch (errorRes.error.error.message) {
//         case 'EMAIL_EXISTS':
//           errorMessage = 'This email exists already';
//           break;
//         case 'EMAIL_NOT_FOUND':
//           errorMessage = 'This email does not exist.';
//           break;
//         case 'INVALID_PASSWORD':
//           errorMessage = 'This password is not correct.';
//           break;
//       }
//       return of(new AuthActions.LoginFail(errorMessage));
//     })
// )


//   })

//   )
//   @Effect({dispatch:false})
//   authSuccess=this.actions$.pipe(ofType(AuthActions.LOGIN),
//   tap(()=>{
// this.router.navigate(['/']);
//   }))
//   constructor(private actions$: Actions,private router:Router, private http:HttpClient) {}
// }
