import { AuthServiceService } from './auth-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
isLoginMode=true;
isLoading=false
error:any=null;
  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {
  }
onSwitchmode(){
  this.isLoginMode= !this.isLoginMode;
}
onSubmit(form:NgForm){
if(!form.valid){
  return ;
}

 const email =form.value.email;
 const password =form.value.password;

 this.isLoading=true;
if(this.isLoginMode){

}else{
  this.authService.signup(email,password).subscribe(
    data=>{
      console.log(data);
      this.isLoading=false;
    },errorMessage=>{
      console.log(errorMessage);
 this.error=errorMessage;
      this.isLoading=false;

    });
}
  form.reset();
}
}
