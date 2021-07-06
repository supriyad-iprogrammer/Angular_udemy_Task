import { NgModule } from "@angular/core";
import { ShoppingListService } from './shopping-list/shoppingList.service';
import { RecipeService } from './receipes/recipe.service';

import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
@NgModule({
  providers:[RecipeService, ShoppingListService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }]
})
export class CoreModule{

}
