import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorkComponent } from './work/work.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    PageNotFoundComponent,
    WorkComponent,
    SettingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
