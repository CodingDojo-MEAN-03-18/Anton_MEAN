import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  time = new Date();
  selectedbutton = null;

  onButtonClick(data){
    this.time = new Date();
    if (data == '1') {
      this.time.setHours(this.time.getHours() - 3);
    } else if (data == '2') {
      this.time.setHours(this.time.getHours() - 2);
    } else if (data == '3') {
      this.time.setHours(this.time.getHours() - 1);
    } else if (data == '4') {
      this.time.setHours(this.time.getHours());
    }else if (data == '5') {
      this.time = null;}
    this.selectedbutton = data;
  }
}
