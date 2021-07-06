

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  {
    path: "recipe",
    loadChildren: () =>
      import("./receipes/recipe.module").then(m => m.RecipeModule)
  },
  {
    path: "shopping",
    loadChildren: () =>
      import("./shopping-list/shoppinglist.module").then(m => m.ShoppingListModule)
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/authModule.module").then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
