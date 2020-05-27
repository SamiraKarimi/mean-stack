import { Component, OnInit } from '@angular/core';
import {HttpService} from 'src/app/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: any;
  constructor(private _http:HttpService, private _router: Router) { }

  ngOnInit() {
      this._http.getAuthors()
          .subscribe(data => {
            console.log('hello form home', data);
            this.authors = data;
            console.log('^^^^^^^^^^^^')
            console.log(this.authors);
        });
  }
  onDelete(id) {
    this._http.deleteAuthor(id)
              .subscribe(data => {console.log('the author deleted', data); } );
  }

}
