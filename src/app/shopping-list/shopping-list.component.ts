import { ShoppingListService } from './shoppingList.service';
import { Ingredints } from './../shared/ingrediant.modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediant!: Ingredints[];
  constructor(private shopplinService:ShoppingListService) { }

  ngOnInit(): void {
   this.ingrediant= this.shopplinService.getShoppingList();
   this.shopplinService.ingrediantChaned.subscribe(
     (ingrediants:Ingredints[])=>{
      this.ingrediant=ingrediants;
     }
   )
  }
  // addIngredients(ingredients:Ingredints){
  //   this.ingrediant.push(ingredients)

  // }

}
