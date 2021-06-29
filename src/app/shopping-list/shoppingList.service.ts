import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredints } from "../shared/ingrediant.modal";

export class ShoppingListService{
  ingrediantChaned=new Subject<Ingredints[]>();
  ingrediant: Ingredints[]=[
    new Ingredints('apple','10')
  ];
  getShoppingList(){
    return this.ingrediant.slice();
  }
   addIngredients(ingredients:Ingredints){
    this.ingrediant.push(ingredients)
this.ingrediantChaned.next(this.ingrediant.slice());

  }
  addIngrediantstoRecipe(ingrediants:Ingredints[]){

this.ingrediant.push(...ingrediants);
this.ingrediantChaned.next(this.ingrediant.slice());
  }
}
