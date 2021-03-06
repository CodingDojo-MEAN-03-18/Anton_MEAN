import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbers: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbers = this._dataService.beta_numbers;
  }

  pushOne() {
    this.numbers.push(this._dataService.generateNumber());
    this.numbers = this._dataService.beta_numbers;
  }
}
