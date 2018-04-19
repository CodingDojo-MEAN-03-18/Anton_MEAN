import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three-component',
  templateUrl: './super-saiyan-three-component.component.html',
  styleUrls: ['./super-saiyan-three-component.component.css']
})
export class SuperSaiyanThreeComponentComponent implements OnInit {
  @Input() power;
  amount = 0;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.amount = this.power * 250;
  }
}
