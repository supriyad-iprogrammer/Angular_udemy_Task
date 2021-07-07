

import { Action } from "rxjs/internal/scheduler/Action";
import { Ingredints } from "src/app/shared/ingrediant.modal";
import * as ShoppingListActions from './shoppingList.action'

export interface State {
  ingrediant: Ingredints[],
  editedIngredient: Ingredints,
  editedIngredientIndex: number
}
export interface AppState {
  shoppingList: State
}
const initialState: State = {
  ingrediant: [
    new Ingredints('apple', '10'),
    new Ingredints('Tomato', '5')
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
}
export function shoppingListReducer(
  state: State = initialState,
  action: ShoppingListActions.ShoppingLIstActions

) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state, ingrediant: [...state.ingrediant, action.payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state, ingrediant: [...state.ingrediant, ...action.payload]
      };
      case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingrediant[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload
      };
      const updatedIngredients = [...state.ingrediant];
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

      return {
        ...state,
        ingredients: updatedIngredients,
        editedIngredientIndex: -1,
        editedIngredient: null
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state, ingrediant: state.ingrediant.filter((ig, IgIndex) => {
          return IgIndex !== state.editedIngredientIndex;
        }),
        editedIngredientIndex: -1,
        editedIngredient: null
      };
    case ShoppingListActions.START_EDIT:
      return {
        ...state,
        editedIngredientIndex: action.payload,
        editedIngredient: { ...state.ingrediant[action.payload] }
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1

      };

    default:
      return state;
  }
}
