import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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

  public getAllEstimates(): Observable<Estimate[]> {
    return this.http
      .get(API_URL + '/estimate')
      .map(response => {
        const estimates = response.json();
        return estimates.map((estimate) => new Estimate(estimate));
      })
      .catch(this.handleError);
  }

  public PostEstimate(estimate: Estimate): Observable<Estimate> {
    return this.http
      .post(API_URL + '/estimate', estimate)
      .map(response => {
        return new Estimate(response.json());
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
