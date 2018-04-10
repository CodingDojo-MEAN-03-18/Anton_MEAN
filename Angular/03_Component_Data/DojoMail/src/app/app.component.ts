import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  myList = { 
    data:[ 
      {email:"bil@gates.com", level:"High", subj:"New Windows", content:"Windows XI will launch in year 2100"},
      {email:"ada@lovelace.com", level:"High", subj:"Programming", content:"Enchantress of Numbers"},
      {email:"john@carmac.com", level:"Low", subj:"Updated Algo", content:"New algorithm for shadow volumes"},
      {email:"gabe@newel.com", level:"Low", subj:"HL3!", content:"Just kidding..."}
    ]
  }
}
