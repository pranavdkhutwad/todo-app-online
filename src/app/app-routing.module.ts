import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './features/contact/contact.component'; 
import { TodoComponent } from './features/todo/todo.component';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page.component';
import { LoginComponent } from './features/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'todo', component: TodoComponent, canActivate: [AuthGuard]}, 
    {path: 'contact', component: ContactComponent, canActivate: [AuthGuard]},
    {path: '**', component: NotFoundPageComponent, canActivate: [AuthGuard]}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
