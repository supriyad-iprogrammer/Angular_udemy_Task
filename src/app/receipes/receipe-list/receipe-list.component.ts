import { RecipeService } from './../recipe.service';
import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

import { Receipe } from '../receipe.modal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
//  @Output() recepeWasSelected=new EventEmitter<Receipe>();
  receipe: Receipe[] = [];
  constructor(private recipeServive:RecipeService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {

this.receipe=this.recipeServive.getReipes();
  }
//   onRecipeselected(recipe:Receipe){
// // this.recepeWasSelected.emit(recipe);         this is remove coz we use services insted of output

//   }
newRecipe(){
  this.router.navigate(['new'] ,{relativeTo:this.route})
}

}
