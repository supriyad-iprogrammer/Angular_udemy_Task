import { CoreModule } from './coreModule.module';
import { SharedModule } from './shared/sharedModule.module';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { StoreModule } from '@ngrx/store';

import * as fromApp from './store/app.reducer'
import { EffectsModule } from '@ngrx/effects';
// import { AuthEffects } from './auth/store/auth.effects';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    SharedModule,
    CoreModule,
    // EffectsModule.forRoot([AuthEffects])
 ],

  bootstrap: [AppComponent]
})
export class AppModule { }
