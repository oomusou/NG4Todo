import {Component} from '@angular/core';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';

  todos: Todo[] = [];

  addTodo(newTodo: HTMLInputElement) {
    this.todos = [...this.todos, {
      id: this.todos.length + 1,
      completed: false,
      value: newTodo.value
    }];
    newTodo.value = '';
  }

  shouldShowTodos() {
    return this.todos.length > 0;
  }

  clearCompleted() {
    this.todos = this.todos.filter(value => !value.completed);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
