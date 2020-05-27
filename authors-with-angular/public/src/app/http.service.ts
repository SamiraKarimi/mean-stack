import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

     getAuthors() {
     return this._http.get('/all');
    }
    addAuthor(newAuthor) {
      return this._http.post('/author', newAuthor);
    }
    deleteAuthor(id) {
      return this._http.get(`/author/${id}/destroy`)
    }
    editAuthor(id) {
      return this._http.get(`/author/${id}/edit`)

    }

    updateAuthor(author) {
      return this._http.put(`/author/${author._id}`, author);
    }

  }

