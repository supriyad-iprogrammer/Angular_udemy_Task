
import { ShoppingListActions } from './../shopping-list/store/shoppingList.action';

import * as fromShoppingList from '../shopping-list/store/shoppingList.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromRecipe from '../../app/receipes/store/recipe.reducer'
import { ActionReducerMap } from '@ngrx/store';
export interface AppState{
shoppingList:fromShoppingList.State;
auth:fromAuth.State;
recipes:fromRecipe.State
}
export const appReducer:ActionReducerMap<AppState>={
  shoppingList:fromShoppingList.shoppingListReducer,
  auth:fromAuth.authReducer,
  recipes:fromRecipe.recipeReducer
}
