import { SharedModule } from './shared/sharedModule.module';


import { AuthInterceptorService } from './auth/auth-interceptor.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShoppingListService } from './shopping-list/shoppingList.service';
import { RecipeService } from './receipes/recipe.service';
import { StyleDirective } from './directive/style.directive';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RenderDirective } from './directive/render.directive';
import { StructualDirective } from './directive/structual.directive';

import { AuthComponent } from './auth/auth.component';

import { RecipeModule } from './receipes/recipe.module';
import { ShoppingListModule } from './shopping-list/shoppinglist.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StyleDirective,
    RenderDirective,
    StructualDirective,
   AuthComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipeModule,
    ShoppingListModule,
    SharedModule

  ],
  providers: [RecipeService, ShoppingListService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
