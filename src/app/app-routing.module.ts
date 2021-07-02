import { AuthComponent } from './auth/auth.component';
import { ReceipeDetailsComponent } from './receipes/receipe-details/receipe-details.component';
import { RecipeStartComponent } from './receipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeEditComponent } from './receipes/recipe-edit/recipe-edit.component';
import { ResolverService } from './shared/resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  {
    path: 'recipe', component: ReceipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: ReceipeDetailsComponent, resolve: [ResolverService] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [ResolverService] }
    ]
  },
  { path: 'shopping', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
