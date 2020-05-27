import { Component, OnInit } from '@angular/core';
import {HttpService} from 'src/app/http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  AuthorId : any;
   authorToEdit: any = {};
  constructor(private _httpService: HttpService,private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.AuthorId = params['id'];
    })
    this.onEdit();

  }
  onEdit(){
    this._httpService.editAuthor(this.AuthorId)
                     .subscribe(data => {
                       this.authorToEdit = data;
                     })
  }

  onUpdate(){
    this._httpService.updateAuthor(this.authorToEdit)
    .subscribe(data => {console.log(`hi from update ${data}`); });
  }



}
