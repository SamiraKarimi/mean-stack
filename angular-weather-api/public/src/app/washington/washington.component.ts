import { Component, OnInit } from '@angular/core';
import {HttpService} from 'src/app/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  city: any;
  status: string;
  maxWeather: any;
  minWeather: any;
  constructor(private _http:HttpService, private _router: Router) { }

  ngOnInit() {
    this._http.getWashingtonApi()
              .subscribe(data => {
                console.log('hello from bbbb', data);
                  this.city=data['name'];
                  this.maxWeather=data['main']['temp_max'];
                  this.minWeather=data['main']['temp_min'];
                  this.status = data['weather'][0]['description']; 
                  console.log(this.status);
              });
  }

}
