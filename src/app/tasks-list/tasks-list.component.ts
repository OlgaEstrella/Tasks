import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Subscription } from 'rxjs/Subscription';
import { Response } from '@angular/http';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  //tasks:  {'ActiveStatus': string, 'TaskName': string, 'MaxDuration': string,  'ScheduledUrl': string}[]=[];
  tasks: any = [];
  cols: any [];
  pageToken = null;
  private reqSubscription: Subscription;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    /*this.tasks  = [
        {'ActiveStatus': "True", 'TaskName': "Task 1", 'MaxDuration': "10", 'ScheduledUrl': "http://site.by"},
        {'ActiveStatus': "false", 'TaskName': "Task 2", 'MaxDuration': "225", 'ScheduledUrl': "http://site2.by"},
        {'ActiveStatus': "True", 'TaskName': "Task 3", 'MaxDuration': "10", 'ScheduledUrl': "http://site.by"},
        {'ActiveStatus': "false", 'TaskName': "Task 4", 'MaxDuration': "229", 'ScheduledUrl': "http://ggsite2.by"},
        {'ActiveStatus': "True", 'TaskName': "11 Task 1", 'MaxDuration': "100", 'ScheduledUrl': "http://llsite.by"},
        {'ActiveStatus': "false", 'TaskName': "22 Task 2", 'MaxDuration': "25", 'ScheduledUrl': "http://ddsite2.by"},
      ];*/
      this.cols = [
            { field: 'ActiveStatus', header: 'Active Status' },
            { field: 'TaskName', header: 'Task Name' },
            { field: 'MaxDuration', header: 'Max Duration' },
            { field: 'ScheduledUrl', header: 'Schedule dUrl' }
        ];

      this.reqSubscription = this.tasksService.getTasks(this.pageToken).subscribe(
        (response) => {
          this.tasks = response.json();
          this.pageToken = this.tasks['pageToken'];
          this.tasksService.setTasksArray(this.tasks);
       },
       (error) => {
         console.log(error);
       }
      );
  }


}
