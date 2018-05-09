import { Injectable } from '@angular/core';
import { Note } from './note';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataServiceService {
  notesObserver = new BehaviorSubject([]);

  constructor(private _http: Http) { }

  retrieveAll() {
    this._http.get('/notes').subscribe(
      tasks => this.notesObserver.next(tasks.json()),
      errorResponse => console.log(errorResponse)
    );
  }

  addNote(newNote: Note) {
    this._http.post('/notes', newNote).subscribe(
      response => this.retrieveAll(),
      errorResponse => console.log(errorResponse)
    );
  }

}
