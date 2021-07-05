import { AuthResposeData, AuthServiceService } from './auth-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false
  error: any = null;
  constructor(private authService: AuthServiceService, private router: Router) { }

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
        this.isLoading = false;

      });
    form.reset();
  }
}
