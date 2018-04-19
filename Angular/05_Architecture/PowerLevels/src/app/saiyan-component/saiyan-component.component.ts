import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-saiyan-component',
  templateUrl: './saiyan-component.component.html',
  styleUrls: ['./saiyan-component.component.css']
})
export class SaiyanComponentComponent implements OnInit {
  @Input() power;
  amount = 0;
  constructor() {}
  ngOnInit() {
  }
  ngOnChanges() {
    this.amount = this.power * 10;
  }
}
