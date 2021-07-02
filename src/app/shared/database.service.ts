import { catchError, map, tap } from 'rxjs/operators';
import { RecipeService } from './../receipes/recipe.service';
import { Receipe } from './../receipes/receipe.modal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  error = new Subject<any>();
  url!: 'https://angular-practice-74410-default-rtdb.firebaseio.com/recipes.json';
  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  createRecipe() {
    const recipe = this.recipeService.getRecipes();
    this.http.put('https://angular-practice-74410-default-rtdb.firebaseio.com/recipes.json', recipe).subscribe(response => {
      console.log(response)
    });
  }
  getdata() {
   return this.http.get<Receipe[]>('https://angular-practice-74410-default-rtdb.firebaseio.com/recipes.json')
   .pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingrediants ? recipe.ingrediants : []
          };
        });
      }),
      tap(recipes => {
        this.recipeService.setRecipe(recipes);
      })
    )
  }
}
