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
  }

  // newTask() {
  //   return  this._http.get('/tasks/new');
  //   // tempObservable.subscribe(data => console.log('went to new page', data));
  // }

 updateTask(task: any) {
    return this._http.post(`/tasks/${task._id}`, task);
 }
 getTask(id: any) {
  return this._http.get(`/task/${id}`);
  // return this._http.get(`/task/${id}`).subscribe(data => console.log('you got one data', data));
}
}






