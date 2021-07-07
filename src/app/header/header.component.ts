import { DatabaseService } from './../shared/database.service';

import { Component ,EventEmitter, OnDestroy, OnInit, Output} from "@angular/core";
import { Router } from "@angular/router";
import { AuthServiceService } from '../auth/auth-service.service';
import { Subscription } from 'rxjs';


@Component({
selector:'app-header',
templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
//  @Output() featureSelected= new EventEmitter<string>();
// onselect(feature:string){
// this.featureSelected.emit(feature)
// }
// onselectshopping(){

// }
private Usersub!:Subscription;
 isAuthenticate=false;
constructor(private router:Router,
  private databaseService:DatabaseService,
  private authService:AuthServiceService){

}
ngOnInit(): void {

 this.Usersub =this.authService.user.subscribe(user=>{
  this.isAuthenticate =!!user;
  console.log(!user);
  console.log(!!user);

 });
}
ngOnDestroy(){
  this.Usersub.unsubscribe();
}
toRecipe(){
this.router.navigate(['recipe']);
}
toShoppingList(){
  this.router.navigate(['shopping'])
  }
  toAuthenticate(){
    console.log("authenticate ")
    this.router.navigate(['/auth'])
  }
  storeRecipe(){
    // debugger
   this.databaseService.createRecipe()
  }
  fetchRecipe(){
    // debugger
    this.databaseService.getdata().subscribe();
}
logout(){
  this.authService.logOut();
}
}
