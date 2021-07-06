import { RecipeService } from './../recipe.service';
import { Recipe } from './../receipe.modal';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';

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
    private router:Router) { }

  ngOnInit(): void {
  this.route.params.subscribe((param:Params)=>{
    this.id=+param['id'];
    console.log(this.id);
    this.selectedRecipe=this.recipeService.getRecipe(this.id)
   console.log(this.selectedRecipe)
  })
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
     console.log(this.id);
    this.recipeService.deleteRecipe(this.id);
    console.log( this.recipeService.deleteRecipe(this.id));


    this.router.navigate(['recipe'])

  }
}
