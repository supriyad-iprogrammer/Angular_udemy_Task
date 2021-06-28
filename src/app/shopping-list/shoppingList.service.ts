import { EventEmitter } from '@angular/core';
import { Ingredints } from "../shared/ingrediant.modal";

export class ShoppingListService{
  ingrediantChaned=new EventEmitter<Ingredints[]>();
  ingrediant: Ingredints[]=[
    new Ingredints('apple','10')
  ];
  getShoppingList(){
    return this.ingrediant.slice();
  }
   addIngredients(ingredients:Ingredints){
    this.ingrediant.push(ingredients)
this.ingrediantChaned.emit(this.ingrediant.slice());

  }
}
