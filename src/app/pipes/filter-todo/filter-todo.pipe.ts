import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from '../../models/todo';
import {FilterType} from '../../enums/filter-type.enum';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform(todos: Todo[], args: FilterType): Todo[] {
    switch (args) {
      case FilterType.Active:
        return todos.filter(value => !value.completed);
      case FilterType.Completed:
        return todos.filter(value => value.completed);
      default:
        return todos;
    }
  }
}
