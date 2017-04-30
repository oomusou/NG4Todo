import {Component, Input} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input()
  private todos: Todo[] = [];

  shouldShowTodos() {
    return this.todos.length > 0;
  }

  getTodosCount() {
    return this.todos
      .filter(todo => !todo.completed)
      .length;
  }
}
