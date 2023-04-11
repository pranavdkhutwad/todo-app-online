import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TodoComponent } from './features/todo/todo.component';
import { ContactComponent } from './features/contact/contact.component';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page.component';
import { TodoFormComponent } from './features/todo/todo-form/todo-form.component';
import { TodoListComponent } from './features/todo/todo-list/todo-list.component';
import { TodoItemComponent } from './features/todo/todo-list/todo-item/todo-item.component';

import { TodoService } from './features/todo/services/todo.service';
import { TodoEditComponent } from './features/todo/todo-edit/todo-edit.component';
import { LoginComponent } from './features/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    ContactComponent,
    NotFoundPageComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
