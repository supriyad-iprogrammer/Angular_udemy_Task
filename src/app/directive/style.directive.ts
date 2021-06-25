import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive(
  {
    selector:'[customDirective]'
  }
)

export class StyleDirective implements OnInit{
constructor(private customDirective:ElementRef ){

}
ngOnInit(): void {
 this.customDirective.nativeElement.style.backgroundColor='#cbcbe1';

}
}
