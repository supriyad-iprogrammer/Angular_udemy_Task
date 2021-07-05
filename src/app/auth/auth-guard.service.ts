import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private AuthService: AuthServiceService,
    private router:Router) { }
    canActivate(  route: ActivatedRouteSnapshot,
      router: RouterStateSnapshot): | boolean|
      UrlTree|
      Promise<boolean|UrlTree>
      |Observable<boolean|UrlTree>
{
  return this.AuthService.user.pipe(
    take(1),
    map(user=>{
      const isAuth=!!user;
      if(isAuth){
        return true;
      }
      return this.router.createUrlTree(['/auth']);
    })
  )
}
}
