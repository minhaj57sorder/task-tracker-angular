import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionbtnComponent } from '../components/actionbtn/actionbtn.component';
import Tasks from '../tasks';
import { TaskService } from '../services/task.service';
import { TaskType } from '../declearedtypes/task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../components/task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ActionbtnComponent, TaskItemComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  title = 'task-tracker';
  tasks: TaskType[] = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  onBtnClick(d: string) {
    this.tasks.push({
      id: 4,
      text: 'Task 4',
      day: '14 feb 24',
      reminder: false,
    } as TaskType);
    console.log(d);
  }
  onDeleteTask(task: TaskType) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
    // this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }
  onToggleTaskReminder(task: TaskType) {
    this.taskService.toggleTaskReminder(task).subscribe(() => {
      task.reminder = !task.reminder;
    });
    // this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }
}
