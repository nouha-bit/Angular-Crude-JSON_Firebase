import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { AddTodoComponent } from './dashboard/add-todo/add-todo.component';
import { ListTodoComponent } from './dashboard/list-todo/list-todo.component';


const routes: Routes = [
  {path:'landing', component:LandingComponent},
  {path: 'Dash', component:DashboardComponent,children:[
    {path:'addtodo', component:AddTodoComponent},
    {path:'listtodo', component:ListTodoComponent}]},
  
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'', redirectTo: '/landing',
  pathMatch:'full'}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
