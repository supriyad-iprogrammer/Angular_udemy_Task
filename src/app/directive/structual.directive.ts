import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructual]'
})
export class StructualDirective {
  @Input() set appStructural(condition:boolean){
if(!condition){
this.viewContainer.createEmbeddedView(this.templateRef)
}else{
this.viewContainer.clear();
}
  }

  constructor( private templateRef:TemplateRef<any>, private viewContainer:ViewContainerRef) { }

}
