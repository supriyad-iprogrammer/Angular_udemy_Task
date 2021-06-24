import { Component, OnInit } from '@angular/core';
import { Ingredints } from 'src/app/shared/ingrediant.modal';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls:['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  data={
    name:'',
    ammount:0
  }
  ingrediant: Ingredints[]=[ new Ingredints(this.data.name,this.data.ammount) ];
  constructor() { }
  ngOnInit(): void {
  }
  save(){
      this.ingrediant.push(

      );
  }
}
