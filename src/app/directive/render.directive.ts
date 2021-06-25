import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appRender]'
})
export class RenderDirective  implements OnInit{
  @Input() defaultfontsize:string ='15px';
  @Input() afterfontsize:string ='20px';
@HostBinding('style.font-size')  fontSize:string=this.afterfontsize;
  constructor(private elementRef:ElementRef,
    private render:Renderer2) {

    }
    ngOnInit(): void {

    }
    @HostListener('mouseover') mouseover(eventdata:Event){
      this.render.setStyle(this.elementRef.nativeElement, 'color','blue')
this.fontSize=this.afterfontsize;
    }
    @HostListener('mouseleave') mouseleave(eventdata:Event){
      this.render.setStyle(this.elementRef.nativeElement, 'color','rgba(0, 0, 0, 0.55)')
      this.fontSize=this.defaultfontsize;
    }
}
