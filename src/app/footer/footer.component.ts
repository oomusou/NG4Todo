import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../todo';
import {FilterType} from '../filter-type.enum';

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

  filterType: FilterType;
  FilterType = FilterType;

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

  filterAllTodos() {
    this.filterType = FilterType.All;
  }

  filterActiveTodos() {
    this.filterType = FilterType.Active;
  }

  filterCompletedTodos() {
    this.filterType = FilterType.Completed;
  }

  isSelected(filterType: FilterType): boolean {
    return this.filterType === filterType;
  }
}
