import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { PagenotfoundComponent } from './pagenotfound.component';
import { OlympicsComponent } from './olympics/olympics.component';
const MY_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'olympics', loadChildren: './olympics/olympics.module#OlympicsModule'},
  {path: '404', component: PagenotfoundComponent},
  {path: '**', redirectTo: '404'}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    OlympicsComponent,     
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
