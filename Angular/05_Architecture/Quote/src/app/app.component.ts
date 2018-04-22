import { Component } from '@angular/core';

import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  q_list: Quote[] = [];

  AddNewQuote(incoming_date) {
    this.q_list.push(incoming_date);
  }

  DeleteEvent(quote) {
    const index = this.q_list.indexOf(quote);
    this.q_list.splice(index, 1);
    console.log(this.q_list);
  }

}
