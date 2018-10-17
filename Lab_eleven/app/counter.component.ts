import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `  
    <div>
    <p>
       Counter works!
    </p>
   <button (click)="increase()">+</button>
   {{counter}}   
   <button (click)="decrease()">-</button>   
   </div>
   <p><ng-content></ng-content></p>
  `,
  styles: [`div{
    border: 2px solid green;  
    padding:5px;
    margin:auto;
    text-align:center;
    width:300px;          
  }
  `]
})
export class CounterComponent implements OnInit{  
  //public counterValue: number;
  @Input() counter: number;
  @Output() counterChange: EventEmitter<number>;
  newVal: number;
  constructor() {
    //this.counterValue = 0;
    this.counterChange = new EventEmitter();
  }
  increase() {
    //this.counterValue += 1;
    // this.counterChange.emit(this.counter++);
    this.newVal = this.counter + 1;
    this.counterChange.emit(this.newVal);
    return false;
  }
  decrease() {
    //this.counterValue -= 1;
    // this.counterChange.emit(this.counter--);
    this.newVal = this.counter - 1;
    this.counterChange.emit(this.newVal);
    return false;
  }
  ngOnInit() {

  }
}
