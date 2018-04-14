import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  message: string = null;
  message2: string = null;
  user: User = new User();

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.message = 'Thank you for registration with us ' + form.value.first_name + '. we just sent you a confirm at '
    + form.value.email + ', and we will send all mail to ' + form.value.address + ', ' + form.value.city
    + ' ' +  form.value.state;
    this.message2 = 'Have a wonderful day!';
    form.reset();
  }
}
