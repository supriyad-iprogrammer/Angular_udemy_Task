import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appRender]'
})
export class RenderDirective  implements OnInit{

  constructor(private elementRef:ElementRef,
    private render:Renderer2) {

    }
    ngOnInit(): void {

      this.render.setStyle(this.elementRef.nativeElement, 'color','rgba(0, 0, 0, 0.55)')
    }

}
