import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

export const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add', component: AddTaskComponent },
];
