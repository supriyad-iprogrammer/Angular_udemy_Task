import { NgModule } from "@angular/core";

import { RecipeService } from './receipes/recipe.service';

import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
@NgModule({
  providers:[RecipeService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }]
})
export class CoreModule{

}
