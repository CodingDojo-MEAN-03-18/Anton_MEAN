import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colors = ["#00FFFF", "#7FFFD4", "#0000FF", "	#7FFF00", "#DC143C", "#006400", "#FF8C00"];

  getRandom():number{
    return Math.floor(Math.random() * 6) +1;
  }
  
}
