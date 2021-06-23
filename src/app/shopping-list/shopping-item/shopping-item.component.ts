import { Component, OnInit } from '@angular/core';
import { Ingredints } from 'src/app/shared/ingrediant.modal';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  ingrediant: Ingredints[]=[ ];
  constructor() { }

  ngOnInit(): void {
  }

}
