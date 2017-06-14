import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Estimate from '../../models/Estimate';
import { EstimateService } from '../../services/estimate.service';

@Component({
  selector: 'app-estimate-list',
  templateUrl: './estimate.component.html',
  providers: [EstimateService]
})
export class EstimateComponent implements OnInit {
  estimates: Estimate[] = [];
  newEstimate: Estimate = new Estimate();

  constructor(
    private router: Router,
    private estimateService: EstimateService) { }

  ngOnInit(): void {
    this.estimateService
      .getAllEstimates()
      .subscribe(
        (estimates) => {
          this.estimates = estimates;
        }
      );
  }

  addEstimate() {

  }

}
