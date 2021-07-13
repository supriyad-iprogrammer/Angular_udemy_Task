import { map, switchMap } from 'rxjs/operators';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../receipe.modal';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as RecipeAction from '../store/recipe.action'
@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.css']
})
export class ReceipeDetailsComponent implements OnInit {

selectedRecipe:Recipe;
id:number;
  constructor(private recipeService:RecipeService,
    private route :ActivatedRoute,
    private router:Router,
    private store:Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.route.params
    .pipe(
      map(params => {
        return +params['id'];
      }),
      switchMap(id => {
        this.id = id;
        return this.store.select('recipes');
      }),
      map(recipesState => {
        return recipesState.recipes.find((recipe, index) => {
          return index === this.id;
        });
      })
    )
    .subscribe(recipe => {
      this.selectedRecipe = recipe;
    });
  }
  onAddShoppingList(){
    console.log("ingrediants details");
   this.recipeService.addIngrediantstoShoppingList(this.selectedRecipe.ingrediants);
   this.router.navigate(['/shopping']);
  }
  editRecipe(){
    // debugger
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id,'edit'] ,{relativeTo:this.route})
  }
  DeleteRecipe(){
    console.log("hiiiiii")
    // debugger
    //  console.log(this.id);
    // this.recipeService.deleteRecipe(this.id);
    // console.log( this.recipeService.deleteRecipe(this.id));
this.store.dispatch(new RecipeAction.DeleteRecipe(this.id))

    this.router.navigate(['/recipe'])

  }
}
