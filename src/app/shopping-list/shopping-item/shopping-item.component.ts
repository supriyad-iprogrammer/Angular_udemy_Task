import { NgForm } from '@angular/forms';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredints } from 'src/app/shared/ingrediant.modal';
import { ShoppingListService } from '../shoppingList.service';
import { Subscription } from 'rxjs';


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

  constructor(private shopplinService: ShoppingListService) { }

  ngOnInit(): void {
    this.subsription =
      this.shopplinService.editStartting.subscribe(
        (index: number) => {
          this.editmod = true;
          this.editedItemIndex = index;
          this.editedItem = this.shopplinService.getIngrediant(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            ammount: this.editedItem.amount
          })
        }
      );

  }
  //   save(){
  // const name=this.nameRef.nativeElement.value;
  // const ammount=this.ammountRef.nativeElement.value;
  // const newIngrediants= new Ingredints(name,ammount);

  // // this.inputIngredients.emit( newIngrediants);
  // this.shopplinService.addIngredients(newIngrediants)

  //   }
  onAddItem(Addform: NgForm) {
    const value = Addform.value;
    const newIngrediants = new Ingredints(value.name, value.ammount);
    if (this.editmod) {
      this.shopplinService.updateIngrediants(this.editedItemIndex, newIngrediants)
    } else {
      this.shopplinService.addIngredients(newIngrediants)
    }
    this.editmod = false;
    Addform.reset();
  }
  ngOnDestroy() {
    this.subsription.unsubscribe();
  }
  onclear() {
    this.slForm.reset();
    this.editmod = false;
  }
  onDelete() {
    this.shopplinService.deleteIngerd(this.editedItemIndex)
    this.onclear();

  }
}
