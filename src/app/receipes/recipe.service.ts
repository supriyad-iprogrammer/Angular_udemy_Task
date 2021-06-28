import { EventEmitter, Injectable } from '@angular/core';
import { Ingredints } from '../shared/ingrediant.modal';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import { Receipe } from "./receipe.modal";

@Injectable()
export class RecipeService{

  recipeSelected=new EventEmitter<Receipe>();
  private receipe : Receipe[]=[
    new Receipe('Pizza',
    'a flat, open-faced baked pie of Italian origin, consisting of a thin layer of bread dough topped with spiced tomato sauce and cheese, often garnished with anchovies, sausage slices, mushrooms, etc.',
    'https://wallpapercave.com/wp/wp3495545.jpg',[
      new Ingredints('cheese','1'),new Ingredints('milk','2')
    ]),

    new Receipe('Burger',
    'The charred, beefy taste of the patty, seasoned simply with salt and pepper (always season the meat only after you form the patty) The rich, creamy taste of cheese. The sweetness of the hamburger buns.',
    'https://wallsdesk.com/wp-content/uploads/2017/01/Fast-Food-HD-Desktop.jpg',
    [      new Ingredints('salt','1'),new Ingredints('oil','2')])
  ];
  constructor(private ShoppingService:ShoppingListService) {

  }
  getReipes(){
    return this.receipe.slice();

  }
  addIngrediantstoShoppingList(ingredients:Ingredints[]){
this.ShoppingService.addIngrediantstoRecipe(ingredients);
  }
}
