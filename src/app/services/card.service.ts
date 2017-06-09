import { Injectable } from '@angular/core';

import Card from '../models/Card';
import { CARDS } from '../data/cards';

@Injectable()
export class CardService {
  getCards(): Promise<Card[]> {
    return Promise.resolve(CARDS);
  }

  // getHeroesSlowly(): Promise<Hero[]> {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(this.getHeroes()), 2000);
  //   });
  // }
  //
  // getHero(id: number): Promise<Hero> {
  //   return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  // }
}
