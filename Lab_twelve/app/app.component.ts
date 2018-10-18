import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<app-list></app-list>
            <div appMyVisibility hide="false">
              <p> Hello world</p>
            </div>            
            <div appMynewColor color="red" (colorEmitter)="changedColor($event)">
                this is where the color going to CHANGE!.
            </div>
            <p>{{colorValue}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'olympics';
  public colorValue;
  changedColor(color){
    console.log(color);
    this.colorValue="An element changed its color to: " + color;
  }
}
