import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  title = 'タスク一覧';
  tasks: Task[];

  constructor(private taskService: TaskService) { }

  prepareTasks(): void {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  ngOnInit(): void {
    this.prepareTasks();
  }

  add(description: string): void {
    description = description.trim();
    if (!description) { return; }
    this.taskService.create(description)
      .then(task => this.tasks.push(task));
  }
}
