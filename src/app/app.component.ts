import { AuthServiceService } from './auth/auth-service.service';
import { Component, OnInit , Inject, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Store } from '@ngrx/store';
import * as fromApp from '././store/app.reducer';
import * as AuthActions from './auth/store/auth.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Assignment-Recipe';
constructor(private authService:AuthServiceService,
  private store: Store<fromApp.AppState>,
  @Inject(PLATFORM_ID) private plateformId){

}
ngOnInit(){
  // this.authService.autoLogin();
  this.store.dispatch(new  AuthActions.AutoLogin())
  // if(isPlatformBrowser(this.plateformId)){
  //   this.authService.autoLogin();
  // }

}
}
