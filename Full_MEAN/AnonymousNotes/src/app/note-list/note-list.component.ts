import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  constructor(private _dataService: DataServiceService) { }

  ngOnInit() {
    this._dataService.notesObserver.subscribe(
      notes => this.notes = notes);
    this._dataService.retrieveAll();
  }
}
