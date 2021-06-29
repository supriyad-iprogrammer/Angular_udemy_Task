import { ShoppingListService } from './shoppingList.service';
import { Ingredints } from './../shared/ingrediant.modal';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingrediant!: Ingredints[];
  private igChanged!: Subscription;
  constructor(private shopplinService:ShoppingListService) { }

  ngOnInit(): void {
   this.ingrediant= this.shopplinService.getShoppingList();
  this.igChanged= this.shopplinService.ingrediantChaned.subscribe(
     (ingrediants:Ingredints[])=>{
      this.ingrediant=ingrediants;
     }
   )
  }
ngOnDestroy(): void {
this.igChanged.unsubscribe();

}
}
