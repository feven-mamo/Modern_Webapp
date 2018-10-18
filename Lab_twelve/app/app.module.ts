import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { MyVisibilityDirective } from './my-visibility.directive';
import { MynewColorDirective } from './mynew-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MyVisibilityDirective,
    MynewColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
