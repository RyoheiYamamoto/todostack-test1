import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Task } from './task';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {

  private taskListUrl = 'http://localhost:9001/todoapp/api/task/list';

  constructor(private http: Http) { }

  getTasks(): Promise<Task[]> {
    return this.http.get(this.taskListUrl)
      .toPromise()
      .then(response => response.json() as Task[]);
  }
}
