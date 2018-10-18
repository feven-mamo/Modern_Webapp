import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
  <p> This is the List of names : <p>
  <ul>
      <li *ngFor = "let name of names">Name : {{name}}</li>
  </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  
  public names:String[] = ['Feven','Milli','Mahder','Tigist'];
  constructor() { }

  ngOnInit() {
  }

}
