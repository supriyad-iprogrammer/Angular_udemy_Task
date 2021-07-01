import { DatabaseService } from './../shared/database.service';

import { Component ,EventEmitter, Output} from "@angular/core";
import { Router } from "@angular/router";


@Component({
selector:'app-header',
templateUrl:'./header.component.html'
})
export class HeaderComponent{
//  @Output() featureSelected= new EventEmitter<string>();
// onselect(feature:string){
// this.featureSelected.emit(feature)
// }
// onselectshopping(){

// }
constructor(private router:Router,
  private databaseService:DatabaseService){

}
toRecipe(){
this.router.navigate(['recipe'])
}
toShoppingList(){
  this.router.navigate(['shopping'])
  }
  storeRecipe(){
this.databaseService.createRecipe();
  }
  fetchRecipe(){
    this.databaseService.getdata();
}
}
