import { Directive, ElementRef, OnInit } from '@angular/core';


// It is directive or our custome directive Like `ngClass` or `ngStyle`
@Directive({
  selector: '[appBasicHighlight]',  // here `[]` is not part of name but part of selector
  // selector: 'appBasicHighlight'  
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {

    // This is bad approach to access/modify the DOM property directally.
    // Actually Angular uses `service-worker` to access the DOM.
    // Althoug this will work, but it is recommaded not to do it.
    console.log("appBasicHighlightappBasicHighlight", this.elementRef.nativeElement);
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
