import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  score = 0;
  constructor(private _http: HttpClient) { }

  getUserData(user_name: string) {
    const url = 'https://api.github.com/users/' + user_name;
      this._http.get(url)
                .subscribe( (data) => {
                  this.score = data['followers'] + data['public_repos'];
                 });
  }
}
