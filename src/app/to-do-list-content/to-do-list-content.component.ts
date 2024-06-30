import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list-content',
  templateUrl: './to-do-list-content.component.html',
  styleUrls: ['./to-do-list-content.component.css'],
})
export class ToDoListContentComponent {
 
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

  statusCheckbox: boolean[] = new Array<boolean>(this.items.length).fill(false); // Array para controlar o estado de cada checkbox

  mudarClasse(index: number) {
    this.statusCheckbox[index] = !this.statusCheckbox[index]; // Altera o estado do checkbox para o item específico na posição index
  }
}
