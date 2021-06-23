import { Ingredints } from './../shared/ingrediant.modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingrediant: Ingredints[]=[
  new Ingredints('apple',5)
];
  constructor() { }

  ngOnInit(): void {
  }

}
