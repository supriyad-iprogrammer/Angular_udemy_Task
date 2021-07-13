import { Recipe } from './../receipe.modal';

import { Action } from '@ngrx/store';
export const SET_RECIPES = '[Recipes] Set Recipes';
export const FETCH_RECIPE = '[Recipes] Fetch Recipes';
export const ADD_RECIPE = '[Recipes] Add Recipes';
export const UPDATE_RECIPE = '[Recipes] Update Recipes';
export const DELETE_RECIPE = '[Recipes] Delete Recipes';
export class SetRecipes implements Action {
  readonly type = SET_RECIPES;

  constructor(public payload: Recipe[]) {}
}
export class FetchRecipe implements Action {
  readonly type = FETCH_RECIPE;
}
export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: Recipe) {}
}
export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;
  constructor(public payload: { index: number; newRecipe: Recipe }) {}
}
export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPE;
  constructor(public payload: number) {}
}

export type RecipesActions =
  | SetRecipes
  | FetchRecipe
  | AddRecipe
  | UpdateRecipe
  | DeleteRecipe;
