import { RecipeEffects } from './receipes/store/recipe.effects';
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
 import { AuthEffects } from './auth/store/auth.effects';
// import { ToastrModule } from 'ngx-toastr';
import{StoreDevtoolsModule} from '@ngrx/store-devtools'
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';
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
    EffectsModule.forRoot([AuthEffects, RecipeEffects]),
    // ToastrModule.forRoot(),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({logOnly:environment.production })
 ],

  bootstrap: [AppComponent]
})
export class AppModule { }
