import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';


// It is directive or our custome directive Like `ngClass` or `ngStyle`.
// It is apply only HTMLelements to modify/access them.
@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // To take input from custome selector(in our case --> directive)
  @Input() defaultColor: string = 'transparent';

  // Since our Alias name (appBetterHighlight) is same as our selector, so we could use `selector and Alias` both simultanouslly.
      // NOTE THAT if we want this, we have to apply it on only single property(in our case--> appBetterHighlight)
    // --> <p [appBetterHighlight]="'red'" defaultColor="yellow">Style me with a better directive!</p>
  @Input('appBetterHighlight') highlightColor: string = 'blue';

  // Alternative of `this.renderer`(This is simple and recommaded way to modify DOM)
  @HostBinding('style.backgroundColor') backgroundColor: string;  // In argument, we pass properties of the HTMLelements

  // When we use our selector in template, angulare will start creating instance of this class.
  // and we know that constructor is called whenever initialing instance.
  // so here, we are creating two properties of our instance at the time of making instance
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // This recommaded way to modify DOM, bcs here Angular uses service-worker to interact with DOM
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  // This decorator is used to listen current DOM event
  @HostListener('mouseenter') customeAli(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
