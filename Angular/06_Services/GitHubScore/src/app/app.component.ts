import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: string;

  constructor(private dataService: DataService) { }

  onSubmit() {
    this.dataService.getUserData(this.user);
  }
}
