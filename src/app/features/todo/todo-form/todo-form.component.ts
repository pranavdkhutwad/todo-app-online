import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Task } from '../interfaces/todo.interface';
import { TodoService } from '../services/todo.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  task: Task = {
    name: '',
    desc: '',
    priority: null
  }

  @Output()
  addTaskEvent: EventEmitter<Task[]> = new EventEmitter();

  @ViewChild('f') form!: NgForm;

  constructor(private todoService: TodoService) {}

  async handleAddTask() {
    console.log('form ==>', this.form);
    try {
      await this.todoService.createTask(this.task)
      const response = await this.todoService.fetchTasks();
      const list = this.todoService.transformObjectToList(response);
      
      this.addTaskEvent.emit(list);
    } catch(error) {
      console.log(error);
    }
    
  }
  
}
