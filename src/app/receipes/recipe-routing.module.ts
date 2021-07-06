import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { ReceipesComponent } from './receipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { ReceipeDetailsComponent } from './receipe-details/receipe-details.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { ResolverService } from '../shared/resolver.service';

const route:Routes=[
  {
    path: 'recipe', component: ReceipesComponent,canActivate:[AuthGuardService], children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: ReceipeDetailsComponent, resolve: [ResolverService] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [ResolverService] }
    ]
  },
]
@NgModule({
imports:[RouterModule.forChild(route)],
  exports:[RouterModule]

})
export class RecipeRoutingModule{

}
