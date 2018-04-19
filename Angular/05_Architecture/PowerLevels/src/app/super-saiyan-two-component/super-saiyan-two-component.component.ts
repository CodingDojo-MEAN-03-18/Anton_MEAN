import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two-component',
  templateUrl: './super-saiyan-two-component.component.html',
  styleUrls: ['./super-saiyan-two-component.component.css']
})
export class SuperSaiyanTwoComponentComponent implements OnInit {
  @Input() power;
  amount = 0;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.amount = this.power * 150;
  }
}
