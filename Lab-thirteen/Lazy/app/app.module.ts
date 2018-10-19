import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notFound.component';

const MY_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'olympics', loadChildren: './olympics/olympics.module#OlympicsModule'},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }