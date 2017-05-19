import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Task } from './task';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private taskUrl = '/api/task/';
  private taskListUrl = '/api/task/list';
  private taskCreateUrl = '/api/task/create';
  private taskUpdateUrl = '/api/task/update';

  constructor(private http: Http) {
  }

  getTasks(): Promise<Task[]> {
    return this.http.get('/api/task/list')
      .toPromise()
      .then(response => response.json() as Task[]);
  }

  getTask(id: number): Promise<Task> {
    const url = `${this.taskUrl}${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Task)
      .catch(this.handleError);
  }

  create(description: string): Promise<Task> {
    return this.http
      .post(this.taskCreateUrl, JSON.stringify({description: description}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(task: Task): Promise<Task> {
    return this.http.post(this.taskUpdateUrl, JSON.stringify(task))
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
