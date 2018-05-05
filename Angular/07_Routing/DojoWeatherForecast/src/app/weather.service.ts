import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  humidity = 0;
  temp_average = 0;
  temp_hight = 0;
  temp_low = 0;
  status = '';
  location = '';

  constructor(private _http: HttpClient) { }

  setData(town: string) {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + town + '&&appid=326b69097b89287316dea6bde748cfda';

    this._http.get(url).subscribe( (data) => {
      console.log(data);
      console.log(town);
      this.humidity = data['main']['humidity'];
      this.temp_average = data['main']['temp'];
      this.temp_hight = data['main']['temp_max'];
      this.temp_low = data['main']['temp_min'];
      this.status = data['weather'][0]['description'];
      this.location = data['name'];
      console.log(this.temp_low);
    });
  }
}
