import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredints } from 'src/app/shared/ingrediant.modal';


@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls:['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

@ViewChild('nameInput') nameRef!:ElementRef;

@ViewChild('AmmountInput') ammountRef!:ElementRef;
@Output() inputIngredients=new EventEmitter<Ingredints>();

  constructor() { }
  ngOnInit(): void {
  }
  save(){
const name=this.nameRef.nativeElement.value;
const ammount=this.ammountRef.nativeElement.value;
const newIngrediants= new Ingredints(name,ammount);

this.inputIngredients.emit( newIngrediants);

  }
}
