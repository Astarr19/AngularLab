import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import {FormsModule} from '@angular/forms';
import { MyFilterPipe } from './my-filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
