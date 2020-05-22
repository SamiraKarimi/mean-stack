import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allTheTask = 'All the tasks';
  tasks: any = [];
  taskToEdit: any = {};
  Detailstask: any ;


  // tslint:disable-next-line: variable-name
  constructor(private _httpService: HttpService) {
  }

ngOnInit() {
//   this.getTaskFromService();
}
getTaskFromService() {
 console.log('I should call the function inside ngOnInit if');
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

onShowDetail(id) {
  this._httpService.getTask(id)
                   .subscribe(mydata => {this.Detailstask = mydata;
                                       console.log('hi from dubscribe', mydata); } );
}

}




