import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import Tasks from '../tasks';
import { TaskType } from '../declearedtypes/task';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:4300/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<TaskType[]> {
    return this.http.get<TaskType[]>(this.apiUrl);
    // const tasks = of(Tasks);
    // return tasks;
  }
  toggleTaskReminder(task: TaskType): Observable<TaskType[]> {
    return this.http.patch<TaskType[]>(
      `${this.apiUrl}/${task.id}`,
      task,
      httpOptions
    );
  }
  deleteTask(task: TaskType): Observable<TaskType[]> {
    return this.http.delete<TaskType[]>(`${this.apiUrl}/${task.id}`);
  }
}
