import { PlaceholderDirective } from './../shared/placeholder/placeholder.directive';
import { AuthResposeData, AuthServiceService } from './auth-service.service';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit,OnDestroy {
  @ViewChild(PlaceholderDirective, {static:false}) alertHost:PlaceholderDirective;
  isLoginMode = true;
  isLoading = false
  error: any = null;
private  closeSub:Subscription;
  constructor(private authService: AuthServiceService, private router: Router,
    private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
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
    this.isLoading = true;
    if (this.isLoginMode) {
      authObj = this.authService.login(email, password);
    } else {
      authObj = this.authService.signup(email, password)
    }
    authObj.subscribe(
      data => {
        console.log(data);
        this.isLoading = false;
        this.router.navigate(['/recipe']);
      }, errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;

      });
    form.reset();
  }
  onHandleError(){
    this.error=null;
  }
  showErrorAlert(message:string){
const alertCmpFactory= this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
const hostViewContainerRef=this.alertHost.viewContainerRef;
hostViewContainerRef.clear();
const componentRef =hostViewContainerRef.createComponent(alertCmpFactory);
componentRef.instance.message=message;
this.closeSub= componentRef.instance.close.subscribe(()=>{
  this.closeSub.unsubscribe();
  hostViewContainerRef.clear();
})
}
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  if(this.closeSub){
    this.closeSub.unsubscribe();
  }
}
}
