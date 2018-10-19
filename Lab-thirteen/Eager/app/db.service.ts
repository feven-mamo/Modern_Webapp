import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [
    {
      _id: 1,
      game: {
        name: 'Basketball',
        schedule: [
          {stadium: 'Zeway', date: '1/2/2000', time: '8:00'}
        ]
      }
    },
    {
      _id: 2,
      game: {
        name: 'Football',
        schedule: [
          {stadium: 'Gondar', date: '1/2/2017', time: '3:00'}
        ]
      }
    }
  ];
  constructor() { }

  getData(){
    return this.data;
  }
  getGameSchedule(id: number){
    for(let g of this.data){
      if(g._id == id) {
        return g.game.schedule;
      }
    }
    return {};
  }
  isValidId(id: number): boolean{
    for(let g of this.data){
      if(g._id == id) {
        return true;
      }
    }
    return false;
  }
}

  