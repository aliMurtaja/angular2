import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnInit {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  ngOnInit() {
    console.log("appUnlessappUnless", this.templateRef, this.vcRef)
  }



  // TemplateRef: just like `ElementRef`, where ElementRef give the reference of the element, here we'll get reference of the template.
  // templateRef --> this is `what`
  // vcRef --> this is `where`  --> means this marks the place where we place our direcitve 
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
