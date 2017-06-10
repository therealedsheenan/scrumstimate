import { Injectable } from '@angular/core';

import Card from '../models/Card';
import { CARDS } from '../data/cards';

@Injectable()
export class CardService {

  getCards(): Promise<Card[]> {
    return Promise.resolve(CARDS);
  }

  getSpecificCard(id): Promise<Card> {
    return this.getCards()
      .then(cards => cards.find(card => card.id === id));
  }

}
