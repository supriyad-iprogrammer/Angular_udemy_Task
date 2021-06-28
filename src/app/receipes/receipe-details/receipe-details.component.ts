import { RecipeService } from './../recipe.service';
import { Receipe } from './../receipe.modal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.css']
})
export class ReceipeDetailsComponent implements OnInit {
@Input() selectedRecipe!:Receipe;
  constructor(private recipe:RecipeService) { }

  ngOnInit(): void {
  }
  onAddShoppingList(){
    console.log("ingrediants details");
   this.recipe. addIngrediantstoShoppingList(this.selectedRecipe.ingrediants)
  }
}
