import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  title = 'タスク一覧';
  tasks: Task[];
  selectedTask: Task;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  prepareTasks(): void {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  ngOnInit(): void {
    this.prepareTasks();
  }

  gotoDetail(task: Task): void {
    this.selectedTask = task;
    this.router.navigate(['/detail', this.selectedTask.taskId]);
  }

  add(description: string): void {
    description = description.trim();
    if (!description) { return; }
    this.taskService.create(description)
      .then(task => this.tasks.push(task));
  }
}
