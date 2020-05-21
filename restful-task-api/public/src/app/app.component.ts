import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  color = 'red';
  tasks: any = [];
  taskToEdit: any = {};


  // tslint:disable-next-line: variable-name
  constructor(private _httpService: HttpService) {
  }

ngOnInit() {
  this.getTaskFromService();
}
getTaskFromService() {
 console.log('I should call the function inside ngOnInit');
 this._httpService.getTasks()
                  .subscribe(data => {
                                    console.log('we are in the app', data);
                                    this.tasks = data;
                                  });
}

updateTaskFromService() {
  this._httpService.updateTask( this.taskToEdit)
                   .subscribe(data => {
                     for (let task of this.tasks) {
                       // @ts-ignore
                        if (data._id == task._id) {
                          task = data;
                        }
                     }
                   });
}

}




