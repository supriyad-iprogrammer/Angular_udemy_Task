import { map } from 'rxjs/operators';
import { RecipeService } from './../recipe.service';
import { Component, OnInit ,EventEmitter, Output, OnDestroy} from '@angular/core';

import { Recipe } from '../receipe.modal';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit , OnDestroy {
//  @Output() recepeWasSelected=new EventEmitter<Receipe>();
  receipe: Recipe[] = [];
  subscription:Subscription;
  constructor(private recipeServive:RecipeService,
    private router:Router,
    private route:ActivatedRoute,
    private store:Store<fromApp.AppState>) { }

  ngOnInit(): void {
this.subscription= this.store.select('recipes').pipe(map(recipesState=>recipesState.recipes)).subscribe(
  (recipe:Recipe[])=>{
  this.receipe=recipe;
  console.log(this.receipe)
})
// this.receipe=this.recipeServive.getRecipes();
  }
//   onRecipeselected(recipe:Receipe){
// // this.recepeWasSelected.emit(recipe);         this is remove coz we use services insted of output

//   }
newRecipe(){
  this.router.navigate(['new'] ,{relativeTo:this.route})
}
ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
