import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskDetailResolver implements Resolve<Task> {

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task>|Promise<Task>|Task {
    const id = route.params['id'];

    return this.taskService.getTask(id).then(task => {
      if (task) {
        return task;
      } else {
        this.router.navigate(['../']);
        return null;
      }
    });
  }
}
