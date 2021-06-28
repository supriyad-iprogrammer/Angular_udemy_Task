import { RecipeService } from './recipe.service';
import { Receipe } from './receipe.modal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
  providers:[RecipeService]
})
export class ReceipesComponent implements OnInit {
@Input() selectedReciepe!:Receipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe:Receipe)=>{
this.selectedReciepe=recipe;
    })
  }

}
