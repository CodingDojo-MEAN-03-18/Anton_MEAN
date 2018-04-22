import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() NewQEvent = new EventEmitter();
  quote = new Quote();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.NewQEvent.emit(this.quote);
    this.quote = new Quote();
    form.reset();

  }

}
