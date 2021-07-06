import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredints } from '../shared/ingrediant.modal';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import {  Recipe } from "./receipe.modal";

@Injectable()
export class RecipeService{
// recipeChanged=new Subject<Receipe[]>();
recipesChanged = new Subject<Recipe[]>();
private recipes: Recipe[] = [];
  // =[
  //   new Receipe('Pizza',
  //   'a flat, open-faced baked pie of Italian origin, consisting of a thin layer of bread dough topped with spiced tomato sauce and cheese, often garnished with anchovies, sausage slices, mushrooms, etc.',
  //   'https://wallpapercave.com/wp/wp3495545.jpg',[
  //     new Ingredints('cheese','1'),new Ingredints('milk','2')
  //   ]),

  //   new Receipe('Burger',
  //   'The charred, beefy taste of the patty, seasoned simply with salt and pepper (always season the meat only after you form the patty) The rich, creamy taste of cheese. The sweetness of the hamburger buns.',
  //   'https://wallsdesk.com/wp-content/uploads/2017/01/Fast-Food-HD-Desktop.jpg',
  //   [      new Ingredints('salt','1'),new Ingredints('oil','2')])
  // ];
  constructor(private ShoppingService:ShoppingListService) {

  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngrediantstoShoppingList(ingredients:Ingredints[]){
  this.ShoppingService.addIngrediantstoRecipe(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {

    this.recipes.splice(index, 1);
    console.log(  this.recipes)
    this.recipesChanged.next(this.recipes.slice());
  }
}
