
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredints } from 'src/app/shared/ingrediant.modal';

import { Subscription } from 'rxjs';
import * as ShoppingListActions from '../store/shoppingList.action';

import * as fromApp from '../../store/app.reducer'
@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit, OnDestroy {
  @ViewChild('form') slForm!: NgForm;
  // @ViewChild('nameInput') nameRef!:ElementRef;

  // @ViewChild('AmmountInput') ammountRef!:ElementRef;
  @Output() inputIngredients = new EventEmitter<Ingredints>();

  data = {
    name: '',
    ammount: ''
  }
  subsription!: Subscription;
  editmod = false;
  editedItemIndex!: number;
  editedItem!: Ingredints;

  constructor(
    private store:Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.subsription =  this.store.select('shoppingList').subscribe(stateData=>{
      if(stateData.editedIngredientIndex>-1){
this.editmod=true;
this.editedItem=stateData.editedIngredient;
this.editedItemIndex=stateData.editedIngredientIndex;
this.slForm.setValue({
  name: this.editedItem.name,
  ammount: this.editedItem.amount
})
      }else{
        this.editmod=false;
      }
    })
    // this.subsription =
    //   this.shopplinService.editStartting.subscribe(
    //     (index: number) => {
    //       this.editmod = true;
    //       this.editedItemIndex = index;
    //       this.editedItem = this.shopplinService.getIngrediant(index);
    //       this.slForm.setValue({
    //         name: this.editedItem.name,
    //         ammount: this.editedItem.amount
    //       })
    //     }
    //   );

  }
  //   save(){
  // const name=this.nameRef.nativeElement.value;
  // const ammount=this.ammountRef.nativeElement.value;
  // const newIngrediants= new Ingredints(name,ammount);

  // // this.inputIngredients.emit( newIngrediants);
  // this.shopplinService.addIngredients(newIngrediants)

  //   }
  onAddItem(Addform: NgForm) {
    // debugger
    const value = Addform.value;
    const newIngrediants = new Ingredints(value.name, value.ammount);
    // debugger
    if (this.editmod) {

      this.store.dispatch(new ShoppingListActions.UpdateIngredient(newIngrediants));
      console.log(this.store)
      // this.shopplinService.updateIngrediants(this.editedItemIndex, newIngrediants)
    }else {
      // this.shopplinService.addIngredients(newIngrediants)
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngrediants));
console.log(this.store)
    }
    this.editmod = false;
    Addform.reset();
  }
  ngOnDestroy() {
    this.subsription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit())

  }
  onclear() {


    this.editmod = false;
    this.store.dispatch(new ShoppingListActions.StopEdit())
    this.slForm.reset();
  }
  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient())
    // this.shopplinService.deleteIngerd(this.editedItemIndex)
    this.onclear();

  }
}
