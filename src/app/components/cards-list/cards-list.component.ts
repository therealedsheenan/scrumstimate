import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Card from '../../models/Card';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {
  cards: Card[];

  constructor(
    private router: Router,
    private cardService: CardService) { }

  gotoDetail(id): void {
    this.router.navigate(['/card', id]);
  }

  getCards(): void {
    this.cardService.getCards()
      .then((cards: Array<any>) => this.cards = cards);
  }

  ngOnInit(): void {
    this.getCards();
  }
}
