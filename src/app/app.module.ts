import { CoreModule } from './coreModule.module';
import { SharedModule } from './shared/sharedModule.module';
import { HttpClientModule } from '@angular/common/http';
import { StyleDirective } from './directive/style.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RenderDirective } from './directive/render.directive';
import { StructualDirective } from './directive/structual.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    SharedModule,
    CoreModule,
 ],

  bootstrap: [AppComponent]
})
export class AppModule { }
