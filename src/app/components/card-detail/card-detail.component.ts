import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import Card from '../../models/Card';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements  OnInit {
  card: Card;

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.cardService.getSpecificCard(+params['id']))
      .subscribe(card => this.card = card);
  }

  goBack(): void {
    this.location.back();
  }
}
