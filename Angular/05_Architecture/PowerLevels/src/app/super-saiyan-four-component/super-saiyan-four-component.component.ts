import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four-component',
  templateUrl: './super-saiyan-four-component.component.html',
  styleUrls: ['./super-saiyan-four-component.component.css']
})
export class SuperSaiyanFourComponentComponent implements OnInit {
  @Input() power;
  amount = 0;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.amount = this.power * 500;
  }
}
