import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  submitEstimate(e) {
    console.log(e);
  }

  onCardClick() {
    console.log('Card clicked.');
  }
}
