import { RecipeService } from './../recipe.service';
import { Receipe } from './../receipe.modal';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.css']
})
export class ReceipeDetailsComponent implements OnInit {

selectedRecipe!:Receipe;
id!:number;
  constructor(private recipeService:RecipeService,
    private route :ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
  this.route.params.subscribe((param:Params)=>{
    this.id=+param['id'];
    this.selectedRecipe=this.recipeService.getRecipe(this.id)
  })
  }
  onAddShoppingList(){
    console.log("ingrediants details");
   this.recipeService.addIngrediantstoShoppingList(this.selectedRecipe.ingrediants)
  }
  editRecipe(){
    this.router.navigate(['../', this.id,'edit'] ,{relativeTo:this.route})
  }
  DeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipe'])
  }
}
