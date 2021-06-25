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
    RenderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
