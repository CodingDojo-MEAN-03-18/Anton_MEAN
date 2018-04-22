import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-show-quote',
  templateUrl: './show-quote.component.html',
  styleUrls: ['./show-quote.component.css']
})
export class ShowQuoteComponent implements OnInit {
  @Input() quotes;
  @Output() QEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  voteUp(quote) {
    quote.votes++;
  }

  voteDown(quote) {
    quote.votes--;
  }

  delete(quote) {
    this.QEvent.emit(quote);
  }

}
