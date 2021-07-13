import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as RecipeAction from './recipe.action';
import { Recipe } from '../receipe.modal';
import { Injectable } from '@angular/core';
@Injectable()
export class RecipeEffects {
  @Effect()
  fetchRecipe = this.actions$.pipe(
    ofType(RecipeAction.FETCH_RECIPE),
    switchMap(() => {
      return this.http.get<Recipe[]>(
        'https://angular-practice-74410-default-rtdb.firebaseio.com/recipes.json'
      );
    }),
    map((recipes) => {
      return recipes.map((recipe) => {
        return {
          ...recipe,
          ingredients: recipe.ingrediants ? recipe.ingrediants : [],
        };
      });
    }),map(recipes=>{
      return new RecipeAction.SetRecipes(recipes);
    })
  );
  constructor(private actions$: Actions, private http: HttpClient) {}
}
