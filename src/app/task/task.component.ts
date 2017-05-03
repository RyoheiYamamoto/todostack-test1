import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  title = 'タスク一覧';
  tasks: Task[];

  constructor() { }

  ngOnInit() {
    const task1 = new Task();
    task1.taskId = 1;
    task1.doneFlg = false;
    task1.description = '1つ目のタスク';

    const task2 = new Task();
    task2.taskId = 1;
    task2.doneFlg = false;
    task2.description = '2つ目のタスク';

    this.tasks = [task1, task2];
  }

}
