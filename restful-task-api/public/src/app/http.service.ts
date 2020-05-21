import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
)
export class HttpService {


  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {
  }

  getTasks() {
    // our http response is an Observable, store it in a variable
    return this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log('Got our tasks in httpservice!', data));
    // return tempObservable;
  }

  // newTask() {
  //   return  this._http.get('/tasks/new');
  //   // tempObservable.subscribe(data => console.log('went to new page', data));
  // }

 updateTask(task: any) {
    return this._http.post(`/tasks/${task._id}`, task);
 }
}




