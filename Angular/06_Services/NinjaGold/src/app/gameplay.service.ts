import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GameplayService {
  gold = 0;
  message: string[] = ['The game is started'];
  constructor() { }

  onFarm() {
    const earned_gold = Math.floor(Math.random() * 5) + 2;
    this.gold += earned_gold;
    this.message.push(`You\'ve earned ${ earned_gold } gold at the Farm`);
  }

  onCave() {
    const earned_gold = Math.floor(Math.random() * 10) + 5;
    this.gold += earned_gold;
    this.message.push(`You\'ve earned ${ earned_gold } gold at the Cave`);
  }

  onHouse() {
    const earned_gold = Math.floor(Math.random() * 7) + 15;
    this.gold += earned_gold;
    this.message.push(`You\'ve earned ${ earned_gold } gold at the House`);
  }

  onCasino() {
    if (this.winOrLose()) {
      const earned_gold = Math.floor(Math.random() * 10) + 100;
      this.gold += earned_gold;
      this.message.push(`You\'ve earned ${ earned_gold } gold at the Casino`);
    } else {
      const missed_gold = Math.floor(Math.random() * 10) + 100;
      this.gold -= missed_gold;
      this.message.push(`You\'ve loose ${ missed_gold } gold at the Casion`);
    }

  }

  winOrLose(): boolean {
    if (Math.round(Math.random()) === 1) {return true;
    }
    return false;
  }
}
