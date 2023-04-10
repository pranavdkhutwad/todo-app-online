import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input()
  highPriorities!: Task[];
  @Input()
  mediumPriorities!: Task[];
  @Input()
  lowPriorities!: Task[];

  @Output()
  deleteTaskEvt: EventEmitter<Task[]> = new EventEmitter();

  handleDeleteTask(tasks: Task[]) {
    this.deleteTaskEvt.emit(tasks);
  }
}
