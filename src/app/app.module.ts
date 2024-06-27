import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; //adicionei para usar o ngModule 

import { AppComponent } from './app.component';
import { ToDoListContentComponent } from './to-do-list-content/to-do-list-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // adição aqui tb é necessária 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
