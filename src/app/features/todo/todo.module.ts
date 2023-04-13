import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';

import { TodoService } from './services/todo.service';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoComponent } from './todo.component';
import { TodoDirective } from './directives/todo.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TodoComponent,
        TodoFormComponent,
        TodoListComponent,
        TodoItemComponent,
        TodoEditComponent,
        TodoDirective
    ],
    imports: [CommonModule, FormsModule],
    providers: [TodoService],
    exports: [TodoComponent]
})
export class TodoModule {}