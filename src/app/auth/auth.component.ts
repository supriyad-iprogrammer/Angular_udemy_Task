import * as AuthActions from './store/auth.action';
import { Store } from '@ngrx/store';
import { PlaceholderDirective } from './../shared/placeholder/placeholder.directive';
import { AuthResposeData, AuthServiceService } from './auth-service.service';
import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import * as fromApp from './../store/app.reducer';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  @ViewChild(PlaceholderDirective, { static: false })
  alertHost: PlaceholderDirective;
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  private closeSub: Subscription;
  private storeSub:Subscription;
  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private store: Store<fromApp.AppState>,

    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {

  }
errorHandle(){
 this.storeSub= this.store.select('auth').subscribe(authState => {
    this.isLoading = authState.loading;
    this.error = authState.authError;
    console.log(this.error);
    if (this.error) {
      this.showErrorAlert(this.error);

      console.log(this.isLoading)
    }
  });
}
  onSwitchmode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    let authObj: Observable<AuthResposeData>;
    // this.isLoading = true;
    if (this.isLoginMode) {
      // authObj = this.authService.login(email, password);
      this.store.dispatch(
        new AuthActions.LoginStart({ email: email, password: password })
      );
      this.errorHandle();
      alert("login Successfull");
      // this.toastr.success("login Successfull")
    } else {
      // authObj = this.authService.signup(email, password);
    this.store.dispatch(new AuthActions.SignupStart({email:email,password:password}))
    this.errorHandle();
    alert("SignUp Successfull");
    }

    // authObj.subscribe(
    //   data => {
    //     console.log(data);
    //     this.isLoading = false;
    //     this.router.navigate(['/recipe']);
    //   }, errorMessage => {
    //     console.log(errorMessage);
    //     this.error = errorMessage;
    //     this.showErrorAlert(errorMessage);
    //     this.isLoading = false;

    //   });
    form.reset();
  }
  onHandleError() {
    // this.error = null;
    this.store.dispatch(new AuthActions.ClearError())
  }
  private showErrorAlert(message: string) {
    const alertCmpFactory =
      this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
    if(this.storeSub){
      this.storeSub.unsubscribe();
    }
  }
}
