import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskListComponent implements OnInit {
  title = 'タスク一覧';
  tasks: Task[];
  selectedTask: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => {
        console.log('params: ' + params['id']);
        return this.getTasks();
      }).subscribe(tasks => this.tasks = tasks);
  }

  gotoDetail(task: Task): void {
    this.selectedTask = task;
    this.router.navigate([this.selectedTask.taskId], { relativeTo: this.route });
  }

  add(description: string): void {
    description = description.trim();
    if (!description) { return; }
    this.taskService.create(description)
      .then(task => this.tasks.push(task));
  }
}
