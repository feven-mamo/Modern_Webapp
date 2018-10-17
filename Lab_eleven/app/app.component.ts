import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Welcome to counter app";
  ComponentCounterValue;
  constructor() {
    this.ComponentCounterValue = 50;
  }
  updateCounter(newValue: number) {
    this.ComponentCounterValue = newValue;
  }
}






