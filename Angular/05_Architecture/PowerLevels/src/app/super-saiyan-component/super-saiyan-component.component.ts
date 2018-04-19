import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-component',
  templateUrl: './super-saiyan-component.component.html',
  styleUrls: ['./super-saiyan-component.component.css']
})
export class SuperSaiyanComponentComponent implements OnInit {
  @Input() power;
  amount = 0;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.amount = this.power * 90;
  }

}
