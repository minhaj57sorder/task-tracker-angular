import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from '../../declearedtypes/task';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: TaskType = {} as TaskType;
  @Output() onDeleteTask = new EventEmitter<TaskType>();
  @Output() onToggleReminder = new EventEmitter<TaskType>();

  onDelete(task: TaskType) {
    this.onDeleteTask.emit(task);
    console.log('delete', task);
  }
  onToggle(task: TaskType) {
    this.onToggleReminder.emit(task);
    console.log('delete', task);
  }
}
