import { Component, Output, Input } from '@angular/core';
import { GameplayService } from './gameplay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _dataService: GameplayService) { }
  title = 'Ninja Gold';
}
