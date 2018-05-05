import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-routeoutelet',
  templateUrl: './routeoutelet.component.html',
  styleUrls: ['./routeoutelet.component.css']
})
export class RouteouteletComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private dataService: WeatherService) {
      this._route.paramMap.subscribe( params => {
      this.getData(params.get('id'));
    });
  }

  ngOnInit() {
  }

  getData(id) {
    this.dataService.setData(id);
  }

}
