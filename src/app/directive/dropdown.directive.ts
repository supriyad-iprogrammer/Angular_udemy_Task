import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]',
  exportAs:'appDropDown'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleopen() {
    this.isOpen = !this.isOpen;
    console.log("hiii")
  }

  constructor() { }

}
