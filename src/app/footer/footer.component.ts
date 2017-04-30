import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input()
  private todos: Todo[] = [];

  @Output()
  clearCompletedEvent = new EventEmitter();

  shouldShowTodos() {
    return this.todos.length > 0;
  }

  getTodosCount() {
    return this.todos
      .filter(todo => !todo.completed)
      .length;
  }

  clearCompleted() {
    this.clearCompletedEvent.emit();
  }
}
