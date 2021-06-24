import { Component, OnInit, Output } from '@angular/core';
import { Ingredints } from 'src/app/shared/ingrediant.modal';


@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls:['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {


 name='';
 ammount='';
  ingrediant: Ingredints[]=[];
  constructor() { }
  ngOnInit(): void {
  }
  save(){


  }
}
