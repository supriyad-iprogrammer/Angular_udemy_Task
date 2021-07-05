import { AuthServiceService } from './auth/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Assignment-Recipe';
constructor(private authService:AuthServiceService){

}
ngOnInit(){
  this.authService.autoLogin();
}
}
