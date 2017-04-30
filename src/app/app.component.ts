import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';

  todos: string[] = [];

  addTodo(newTodo: HTMLInputElement) {
    this.todos = [...this.todos, newTodo.value];
    newTodo.value = '';
  }

  shouldShowTodos() {
    return this.todos.length > 0;
  }
}
