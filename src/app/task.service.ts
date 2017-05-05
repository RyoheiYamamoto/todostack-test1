import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Task } from './task';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private taskListUrl = '/api/task/list';
  private taskCreateUrl = '/api/task/create';

  constructor(private http: Http) { }

  getTasks(): Promise<Task[]> {
    return this.http.get(this.taskListUrl)
      .toPromise()
      .then(response => response.json() as Task[]);
  }

  create(description: string): Promise<Task> {
    return this.http
      .post(this.taskCreateUrl, JSON.stringify({description: description}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
