import { take, map, switchMap } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from './../receipes/receipe.modal';
import { Injectable } from '@angular/core';

import { DatabaseService } from './database.service';
import { RecipeService } from '../receipes/recipe.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';

import * as RecipeAction from '../../app/receipes/store/recipe.action';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ResolverService implements Resolve<Recipe[]> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return this.recipesService.getRecipes();
  return this.store.select('recipes').pipe(
    take(1),
      map((recipeState) => {
        return recipeState.recipes;
      }),
      switchMap((recipes) => {
        if (recipes.length === 0) {
          this.store.dispatch(new RecipeAction.FetchRecipe());
          return this.actions$.pipe(ofType(RecipeAction.SET_RECIPES), take(1));
        }
        else{
          return of(recipes)
        }
      })
    );

    // if (recipes.length === 0) {
    //   return this.dataservice.getdata();
    // } else {
    //   return recipes;
    // }
  }
}
