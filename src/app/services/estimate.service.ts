import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from 'environments/environment';
import Estimate from '../models/Estimate';

const API_URL = environment.apiUrl;

@Injectable()
export class EstimateService {

  constructor(private http: Http) {
  }

  public getAllEstimates (): Observable<Estimate[]> {
    return this.http
      .get(API_URL + '/estimate')
      .map(response => {
        const estimates = response.json();
        return estimates.map((estimate) => estimate);
      });
  }
}
