import { Component, OnInit, Inject } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';

import { AppConst } from '../app.const';

import { TaskService } from '../task.service';
import { Task } from '../task';

import 'rxjs/add/operator/switchMap';

import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-task-detail',
  template: '',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  task: Task;

  constructor(private taskService: TaskService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MdDialog) {
  }

  ngOnInit(): void {
    this.route.data
      .subscribe((data: { task: Task }) => {
          this.task = data.task;
          this.openDialog();
      });
  }

  save(): Promise<Task> {
    return this.taskService.update(this.task);
  }

  openDialog() {
    const dialogRef = this.dialog.open(TaskDetailDialogComponent, <MdDialogConfig>{
      width: '600px',
      data: this.task
    });
    dialogRef.afterClosed()
      .switchMap(ignore => this.save())
      .subscribe(task => {
        this.task = task;
        this.router.navigate(['../'], { relativeTo: this.route});
      });
  }
}

@Component({
  selector: 'app-task-detail-dialog',
  templateUrl: './task-detail-dialog.html',
})
export class TaskDetailDialogComponent implements OnInit {
  task: Task;
  selectedStatus: String;
  statusCodeList: Object;

  constructor(private dialogRef: MdDialogRef<TaskDetailDialogComponent>,
              private router: Router,
              @Inject(MD_DIALOG_DATA) private data: Task) {
  }

  ngOnInit(): void {
    this.task = this.data;
    this.selectedStatus = this.task.statusCode;
    this.statusCodeList = AppConst.TaskStatus;
  }

  goTaskList() {
    this.router.navigate(['/tasks']);
  }
}
