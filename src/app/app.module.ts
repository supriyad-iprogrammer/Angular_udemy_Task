import { CoreModule } from './coreModule.module';
import { SharedModule } from './shared/sharedModule.module';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/store/shoppingList.reducer';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    StoreModule.forRoot({shoppingList:shoppingListReducer}),
    SharedModule,
    CoreModule,
 ],

  bootstrap: [AppComponent]
})
export class AppModule { }
