import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/sharedModule.module';
import { RecipeRoutingModule } from './recipe-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { ReceipeDetailsComponent } from "./receipe-details/receipe-details.component";
import { ReceipeItemComponent } from "./receipe-list/receipe-item/receipe-item.component";
import { ReceipeListComponent } from "./receipe-list/receipe-list.component";
import { ReceipesComponent } from "./receipes.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";


@NgModule({
  declarations:[
    ReceipesComponent,
    ReceipeDetailsComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,

  ],
  imports:[RouterModule, SharedModule,ReactiveFormsModule,RecipeRoutingModule],
  exports:[
    ReceipesComponent,
    ReceipeDetailsComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent

  ]
})
export class RecipeModule{

}
