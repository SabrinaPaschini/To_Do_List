import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoListContentComponent } from './to-do-list-content/to-do-list-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
