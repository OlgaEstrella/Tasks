import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TasksService {
  private tasks: {'models':
    [{
    'Body': 'string',
    'ConflictTasks': ['string'],
    'Cron': '0 * * * * ?',
    'Headers': {},
    'MaxDuration': 15,
    'ScheduledUrl': 'string',
    'TaskName': 'string',
    '_id': 'string',
    '_rev': 'string'
    }],
    'pageToken': string}[]= [] ;

  constructor(private http: Http) { }

  getTasks(pageToken) {
    const headers = new Headers({
      'Content-Type': 'application/json;charset=UTF-8'
    });

    if (pageToken === null || pageToken === undefined ) {
      return (this.http.get('https://ldd-scheduler-test.mybluemix.net/api/scheduler/tasks',
              { headers: headers }
      ));
    }
    return (this.http.get('https://ldd-scheduler-test.mybluemix.net/api/scheduler/tasks/' + pageToken,
            { headers: headers }
          ));
  }

  setTasksArray(tasksArray) {
    this.tasks = tasksArray;
  }


}
