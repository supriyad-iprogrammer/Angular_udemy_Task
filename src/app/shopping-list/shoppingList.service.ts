import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredints } from "../shared/ingrediant.modal";

export class ShoppingListService {
  ingrediantChaned = new Subject<Ingredints[]>();
  editStartting = new Subject<number>();
  ingrediant: Ingredints[] = [
    new Ingredints('apple', '10')
  ];
  getShoppingList() {
    return this.ingrediant.slice();
  }
  addIngrediantstoRecipe(ingrediants: Ingredints[]) {
    this.ingrediant.push(...ingrediants);
    this.ingrediantChaned.next(this.ingrediant.slice());
  }
  getIngrediant(index: number) {
    return this.ingrediant[index];
  }
  addIngredients(ingredients: Ingredints) {
    this.ingrediant.push(ingredients)
    this.ingrediantChaned.next(this.ingrediant.slice());

  }
  updateIngrediants(index: number, newIngred: Ingredints) {
    this.ingrediant[index] = newIngred;
    this.ingrediantChaned.next(this.ingrediant.slice());
  }
  deleteIngerd(index: number) {
    this.ingrediant.splice(index, 1);
    this.ingrediantChaned.next(this.ingrediant.slice());
  }
}
