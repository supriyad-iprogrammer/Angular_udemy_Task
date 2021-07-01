import { RecipeService } from './../receipes/recipe.service';
import { Receipe } from './../receipes/receipe.modal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  url!: 'https://angular-practice-74410-default-rtdb.firebaseio.com/recipes.json';
  constructor(private http:HttpClient, private recipeService:RecipeService) { }

  createRecipe(){
const recipe=this.recipeService.getReipes();
    this.http.put('https://angular-practice-74410-default-rtdb.firebaseio.com/recipes.json',recipe).subscribe(response=>{
      console.log(response)
    });
  }
  getdata(){
 this.http.get<Receipe[]>('https://angular-practice-74410-default-rtdb.firebaseio.com/recipes.json').subscribe(
   recipe=>{
    this.recipeService.setRecipe(recipe);
   }
 );
  }
}
