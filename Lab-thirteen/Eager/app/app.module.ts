import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { OlympicsModule, OLYMPIC_ROUTES } from './olympics/olympics.module';
import { NotFoundComponent } from './notFound.component';

const MY_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'olympics', children: OLYMPIC_ROUTES},
  {path: 'notFound', component: NotFoundComponent},
  {path: '**', redirectTo: 'notFound'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    OlympicsModule,
    RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

