import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';
import { TodoEditComponent } from '../../todo-edit/todo-edit.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input()
  task!: Task;

  @Output()
  deleteTaskEvt: EventEmitter<Task[]> = new EventEmitter();
  now: Date = new Date();

  constructor(
    private todoService: TodoService,
    private modalService: NgbModal
  ) {}

  getBorderClass(priority: number | null) {
    return this.todoService.getBorderClass(priority);
  }

  handleEditTask(task: Task) {
    this.modalService.open(TodoEditComponent);
  }

  async handleDeleteTask(id: string | undefined) {
    try {
      if (id) {
        await this.todoService.deleteTask(id);
        const response = await this.todoService.fetchTasks();
        const list = this.todoService.transformObjectToList(response);
        this.deleteTaskEvt.emit(list);
      }
    } catch (error) {
      console.log(error);
    }
    
      
  }
}
