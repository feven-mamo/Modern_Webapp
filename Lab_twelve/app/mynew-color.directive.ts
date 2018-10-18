import { Directive, Input, HostBinding, HostListener,EventEmitter } from '@angular/core';

//import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';


@Directive({
  selector: '[appMynewColor]',
  outputs:['colorEmitter']
})
export class MynewColorDirective {

  @Input('color') nwcolor;
  @HostBinding('style.color') myColor;
  public colorEmitter:EventEmitter<String>;
  constructor() {
    this.colorEmitter = new EventEmitter();
   }
  @HostListener('click') changeColor(){this.myColor=this.nwcolor;this.colorEmitter.emit(this.nwcolor);
  }
}

