import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorkComponent } from './work/work.component';
import { SettingComponent } from './setting/setting.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: 'works', component: WorkComponent },
  { path: 'settings', component: SettingComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
