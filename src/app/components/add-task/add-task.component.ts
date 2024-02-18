import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  taskText: string = '';
  taskDate: string = '';
  taskReminder: boolean = false;
  onSubmit() {
    console.log('submit', this.taskText, this.taskDate, this.taskReminder);
  }
}
