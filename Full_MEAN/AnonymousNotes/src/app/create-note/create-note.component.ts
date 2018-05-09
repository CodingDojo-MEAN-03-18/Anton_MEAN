import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Note } from '../note';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  note: Note = new Note();
  constructor(private _dataService: DataServiceService) { }

  ngOnInit() {
  }

  onSubmit(note: Note) {
    this._dataService.addNote(this.note);
    this.note = new Note();
  }
}
