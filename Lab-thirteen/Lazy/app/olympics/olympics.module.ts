import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlympicsComponent } from './olympics.component';
import { GameDetailsComponent } from './game-details.component';
import { DetailsGuard } from './details.guard';
import { GamesComponent } from './games.component';
import { RouterModule } from '@angular/router';

export const OLYMPIC_ROUTES = [
  {path:'', component: OlympicsComponent},
  {path:'game/:id', component: GameDetailsComponent, canActivate: [ DetailsGuard ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OLYMPIC_ROUTES)
  ],
  declarations: [
    GamesComponent,
    OlympicsComponent,
    GameDetailsComponent
  ],
  bootstrap: [ OlympicsComponent ]
})
export class OlympicsModule { }