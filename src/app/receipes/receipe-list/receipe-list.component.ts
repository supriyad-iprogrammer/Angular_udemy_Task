import { RecipeService } from './../recipe.service';
import { Component, OnInit ,EventEmitter, Output, OnDestroy} from '@angular/core';

import { Receipe } from '../receipe.modal';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit , OnDestroy {
//  @Output() recepeWasSelected=new EventEmitter<Receipe>();
  receipe: Receipe[] = [];
  subscription!:Subscription;
  constructor(private recipeServive:RecipeService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
this.recipeServive.recipeChanged.subscribe((recipe:Receipe[])=>{
  this.receipe=recipe;
  console.log(this.receipe)
})
this.receipe=this.recipeServive.getReipes();
  }
//   onRecipeselected(recipe:Receipe){
// // this.recepeWasSelected.emit(recipe);         this is remove coz we use services insted of output

//   }
newRecipe(){
  this.router.navigate(['new'] ,{relativeTo:this.route})
}
ngOnDestroy(){
  // this.subscription.unsubscribe();
}
}
