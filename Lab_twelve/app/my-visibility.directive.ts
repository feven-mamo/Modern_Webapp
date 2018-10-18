import { Directive, Renderer2, ElementRef, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyVisibility]'
})
export class MyVisibilityDirective {

  constructor(private e: ElementRef, private r: Renderer2) {
    // e.nativeElement.style.fontSize = '22px'
    r.setStyle(e.nativeElement, 'font-size', '34px');
  }
  // Set a property in the class from outside
  @HostBinding('style.display') myHide;
  @Input('hide') defaultHide = false;

  // To Listen to Events that are triggered by client
  @HostListener('mouseenter') enter() { this.e.nativeElement.style.color = 'red'; this.myBG = 'yellow' }
  @HostListener('mouseleave') leave() { this.e.nativeElement.style.color = 'black'; this.myBG = 'white' }
  @HostBinding('style.backgroundColor') myBG;

  ngOnInit() { // reached after all bound properties are initilized

    console.log(this.defaultHide);
    if (this.defaultHide) this.myHide = 'none';
  }

}
