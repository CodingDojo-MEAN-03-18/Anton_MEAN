import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  color = "green";
  b_names: any[] = ["ON", "ON", "ON", "ON", "ON", "ON", "ON", "ON"];

  onClick(index){
    if (this.b_names[index] == "ON"){
      this.b_names[index] = "OFF";
    }else{
      this.b_names[index] = "ON";
    }
  }

}
