import { RecipeService } from './../../recipe.service';
import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

import { Recipe } from '../../receipe.modal';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
@Input() rec:Recipe;
 @Input() index: number;

// @Output() selectedReceipe=new EventEmitter<void>();
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {

  }


}
