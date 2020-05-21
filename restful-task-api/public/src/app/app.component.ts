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

  // tslint:disable-next-line: variable-name
  constructor(private _httpService: HttpService) {
    const observable =  this._httpService.getTasks();
    observable.subscribe(data => {
                        console.log('we are in the app', data);
                        this.tasks = data;
                      });
  }

ngOnInit() {
  console.log('we are live');
}
getTaskFromService() {
 console.log('heyyy');
}

}
