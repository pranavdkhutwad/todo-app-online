import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './features/contact/contact.component'; 
import { TodoComponent } from './features/todo/todo.component';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page.component';

const routes: Routes = [
    {path: '', redirectTo: '/todo', pathMatch: 'full'},
   {path: 'todo', component: TodoComponent}, 
   {path: 'contact', component: ContactComponent},
   {path: '**', component: NotFoundPageComponent}

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
