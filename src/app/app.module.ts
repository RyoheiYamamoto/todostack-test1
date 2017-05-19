import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskRoutingModule } from './task/task-routing-module';
import { TaskListComponent } from './task/task-list.component';
import { TaskService } from './task.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorkComponent } from './work/work.component';
import { SettingComponent } from './setting/setting.component';
import { TaskDetailComponent, TaskDetailDialogComponent } from './task-detail/task-detail.component';
import { KeysPipe } from './keys.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSidenavModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskDetailDialogComponent,
    PageNotFoundComponent,
    WorkComponent,
    SettingComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    TaskRoutingModule,
    AppRoutingModule,
    MdSidenavModule,
    MdButtonModule,
    MdListModule,
    MdInputModule,
    MdCardModule,
    MdToolbarModule,
    MdDialogModule,
    MdSelectModule
  ],
  providers: [TaskService],
  entryComponents: [
    TaskDetailDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
