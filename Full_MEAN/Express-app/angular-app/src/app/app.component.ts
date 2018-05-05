import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  newTask: Task = new Task();
  tasks: Task[] = [];

  constructor(private _taskService: TaskService) { }

  ngAfterViewInit() {
    this._taskService.tasksObserver.subscribe(
      tasks => this.tasks = tasks
    );
    this._taskService.retrieveAll();
  }

  onSubmit() {
    this._taskService.createTask(this.newTask);
    this.newTask = new Task();
  }
}
