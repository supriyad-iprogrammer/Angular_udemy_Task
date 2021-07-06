import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { DropdownDirective } from "../directive/dropdown.directive";
import { LoadingSpinnerComponent } from "../loading-spinner/loading-spinner/loading-spinner.component";
import { AlertComponent } from "./alert/alert.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { CommonModule } from '@angular/common';
import { RenderDirective } from '../directive/render.directive';
import { StructualDirective } from '../directive/structual.directive';
import { StyleDirective } from '../directive/style.directive';

@NgModule({
  declarations:[
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    DropdownDirective,
    StyleDirective,
    RenderDirective,
    StructualDirective,
  ],
  imports:[CommonModule],
  exports:[ LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    DropdownDirective,
    StyleDirective,
    RenderDirective,
    StructualDirective,
  CommonModule]
})
export class SharedModule{

}
