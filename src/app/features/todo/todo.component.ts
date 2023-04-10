import { Component, OnInit } from '@angular/core';
import { Task } from './interfaces/todo.interface';
import { TodoService } from './services/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  highPriorityList: Task[] = [];
  mediumPriorityList: Task[] = [];
  lowPriorityList: Task[] = [];

  constructor(private todoService: TodoService) {}

  updateTodoUI(tasks: Task[]) {
    const {
      highPriorities,
      mediumPriorities,
      lowPriorities
    } = this.todoService.getListByCategories(tasks);

    this.highPriorityList = highPriorities;
    this.mediumPriorityList = mediumPriorities;
    this.lowPriorityList = lowPriorities;
  }
  async ngOnInit() {
    const response = await this.todoService.fetchTasks();
    const list = this.todoService.transformObjectToList(response);
    this.updateTodoUI(list);
  }

  handleUpdateTodoUI(tasks: Task[]) {
    this.updateTodoUI(tasks);
  }
}
