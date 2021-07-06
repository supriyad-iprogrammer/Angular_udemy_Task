import { SharedModule } from './../shared/sharedModule.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";

@NgModule({
  declarations:[AuthComponent],
  imports:[CommonModule,RouterModule.forChild([
    { path: '', component: AuthComponent }
  ]), FormsModule, SharedModule],

})
export class AuthModule{

}
