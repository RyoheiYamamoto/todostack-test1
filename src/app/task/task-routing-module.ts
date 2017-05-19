
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskComponent } from './task.component';
import { TaskDetailResolver } from './task-detail-resolver.service';

const taskRoutes = [
  { path: 'tasks',
    component: TaskComponent,
    children: [
      { path: '',
        component: TaskListComponent,
        children: [
          { path: ':id',
            component: TaskDetailComponent,
            resolve: {
              task: TaskDetailResolver
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(taskRoutes)
  ],
  exports: [RouterModule],
  providers: [
    TaskDetailResolver
  ]
})
export class TaskRoutingModule {

}
