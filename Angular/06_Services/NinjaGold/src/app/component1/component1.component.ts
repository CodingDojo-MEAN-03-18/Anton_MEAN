import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameplayService } from '../gameplay.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  constructor(private _dataService: GameplayService) { }

  ngOnInit() {
  }

  onClick(value: number) {
    switch (value) {
      case 1: this._dataService.onFarm();  break;
      case 2: this._dataService.onCave(); break;
      case 3: this._dataService.onCasino(); break;
      case 4: this._dataService.onHouse(); break;
    }
  }
}
