import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-content',
  templateUrl: './to-do-list-content.component.html',
  styleUrls: ['./to-do-list-content.component.css'],
})
export class ToDoListContentComponent implements OnInit {

  constructor() {}

          items: string[] = [''];
          newItem:string= '';

  addToList() {

    this.items.push(this.newItem); //pegar items e coloca dentro da string vazia chamada nome  
    this.newItem ='';
  }



  ngOnInit(): void {}
}
