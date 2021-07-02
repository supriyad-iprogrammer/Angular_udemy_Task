import {Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot} from '@angular/router';
import { Receipe } from './../receipes/receipe.modal';
import { Injectable } from '@angular/core';

import { DatabaseService } from './database.service';
import { RecipeService } from '../receipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Receipe[]> {

  constructor(private dataservice:DatabaseService,   private recipesService: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.dataservice.getdata();
    const recipes = this.recipesService.getRecipes();
    if (recipes.length === 0) {
      return this.dataservice.getdata();
    } else {
      return recipes;
    }
  }
}
