import { ShoppingListService } from './shopping-list/shoppingList.service';
import { RecipeService } from './receipes/recipe.service';
import { StyleDirective } from './directive/style.directive';
import { ReceipeItemComponent } from './receipes/receipe-list/receipe-item/receipe-item.component';
import { ReceipeListComponent } from './receipes/receipe-list/receipe-list.component';
import { ReceipeDetailsComponent } from './receipes/receipe-details/receipe-details.component';
import { ReceipesComponent } from './receipes/receipes.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-list/shopping-item/shopping-item.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HeaderComponent} from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RenderDirective } from './directive/render.directive';
import { StructualDirective } from './directive/structual.directive';
import { DropdownDirective } from './directive/dropdown.directive';
import { RecipeStartComponent } from './receipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './receipes/recipe-edit/recipe-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    ShoppingItemComponent,
    ShoppingListComponent,
    ReceipesComponent,
    ReceipeDetailsComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    StyleDirective,
    RenderDirective,
    StructualDirective,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
