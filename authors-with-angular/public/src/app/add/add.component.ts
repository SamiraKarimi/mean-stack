import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newAuthor: any;

  constructor( private _httpService:HttpService,private _router: Router) {}

  ngOnInit() {
    this.newAuthor = {name: ''};
  }

  onSubmit() {
    console.log("i am submit");
    this._httpService.addAuthor(this.newAuthor)
                     .subscribe(data => {console.log('get data from post', data);
                                         this.newAuthor = {name: ''};

                    });
  }
  goHome() {
    this._router.navigate(['/']);
  }


}
