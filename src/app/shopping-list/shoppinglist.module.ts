import { SharedModule } from './../shared/sharedModule.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { ShoppingItemComponent } from "./shopping-item/shopping-item.component";
import { ShoppingListComponent } from "./shopping-list.component";


@NgModule({
declarations:[
  ShoppingItemComponent,
  ShoppingListComponent,
],
imports:[RouterModule.forChild([
  { path: '', component: ShoppingListComponent }
]),SharedModule,FormsModule],
exports:[
  ShoppingItemComponent,
  ShoppingListComponent,
]
})
export class ShoppingListModule{

}
