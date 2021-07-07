import { AppState } from './store/shoppingList.reducer';

import { Ingredints } from './../shared/ingrediant.modal';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from './store/shoppingList.action';
import * as fromShoppinList from './store/shoppingList.reducer';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingrediant:Observable<{ingrediant:Ingredints[]}> ;
  private igChanged!: Subscription;
  constructor(
    private store:Store<fromShoppinList.AppState>) { }

  ngOnInit(): void {
    this.ingrediant= this.store.select('shoppingList');
console.log(this.ingrediant)
  //  this.ingrediant= this.shopplinService.getShoppingList();
  // this.igChanged= this.shopplinService.ingrediantChaned.subscribe(
  //    (ingrediants:Ingredints[])=>{
  //     this.ingrediant=ingrediants;
  //    }
  //  )
  }
ngOnDestroy(): void {
// this.igChanged.unsubscribe();

}
onEditItem(index:number){
// this.shopplinService.editStartting.next(index)
this.store.dispatch(new ShoppingListActions.StartEdit(index))
}
}
