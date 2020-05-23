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
  newTask: any;
  theNewTask: any;



  // tslint:disable-next-line: variable-name
  constructor(private _httpService: HttpService) {
  }

ngOnInit() {
  // this.getTaskFromService();
  this.newTask = {title: '', description: ''};

}
getTaskFromService() {
 console.log('I should call the function inside ngOnInit if i wanted to load after constructor');
 this._httpService.getTasks()
                  .subscribe(data => {
                                    console.log('we are in the app', data);
                                    this.tasks = data;
                                  });
}


onShowDetail(id) {
  this._httpService.getTask(id)
                   .subscribe(mydata => {this.Detailstask = mydata;
                                         console.log(`hi from subscribe ${mydata}`); } );
}
onSubmit() {
  this._httpService.addTask(this.newTask)
                    .subscribe(thedata => {
                                        console.log(`hi this is from ${thedata}`);
                                        this.newTask = {title: '', description: ''}
                    });
}
onDelete(id: any) {
  console.log('hey delete');
  this._httpService.deleteTask(id)
                  .subscribe(data => {console.log(`hi from deleteSub ${data}`); });

}
onEdit(id: any) {
  console.log('hey Edit');
  this._httpService.getTask(id)
                   .subscribe(data => {console.log(`hi from edit ${data['title']}`);
                                       this.taskToEdit = data;
                  } );

}
onUpdate() {
  this._httpService.editTask( this.taskToEdit)
                   .subscribe(data => {console.log(`hi from updata ${data}`)});

}

}


