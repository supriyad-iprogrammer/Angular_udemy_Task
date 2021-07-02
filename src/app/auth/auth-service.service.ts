import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
interface AuthResposeData {
  kind:string;
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn:string
  localId:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient ) {}
  signup(email:string, password:string){
   return this.http.post<AuthResposeData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZ4akeAmSGzzOv1QKe8PTC4uJnmI118k0',
    {email:email,
    password:password,
    returnSecureToken:true}).pipe(catchError(errorRes=>{
      let errorMessage='An Error Occurred!!!';
      if(!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage)
      }
switch(errorRes.error.error.message){
  case 'EMAIL_EXISTS':
  errorMessage="this email already exist";
}
return throwError(errorMessage)
    }

    ))
  }
}
