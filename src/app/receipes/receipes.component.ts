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

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {

  }

}
