import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    const task1 = new Task();
    task1.taskId = 1;
    task1.doneFlg = false;
    task1.description = '1つ目のタスク';

    const task2 = new Task();
    task2.taskId = 1;
    task2.doneFlg = false;
    task2.description = '2つ目のタスク';

    return [task1, task2];
  }
}
