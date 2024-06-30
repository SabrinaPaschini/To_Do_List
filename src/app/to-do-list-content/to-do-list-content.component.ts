import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list-content',
  templateUrl: './to-do-list-content.component.html',
  styleUrls: ['./to-do-list-content.component.css'],
})
export class ToDoListContentComponent {
  [x: string]: any;
  items: string[] = []; // Array que armazena os itens da lista
  newItem: string = ''; // Variável para armazenar o novo item a ser adicionado

  // Método para adicionar um novo item à lista
  addToList() {
    this.items.push(this.newItem); // Adiciona o newItem ao array items
    this.newItem = ''; // Limpa o campo de entrada newItem
  }

  removeLast() {
    this.items.pop();
    this.newItem = '';
  }
  statusCheckbox: boolean = false;

  mudarClasse() {
    this.statusCheckbox = !this.statusCheckbox;
  }
}
