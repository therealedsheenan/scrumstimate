import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsListComponent } from '../components/cards-list/cards-list.component';
import { CardDetailComponent } from '../components/card-detail/card-detail.component';

const routes: Routes = [
  { path: '', component: CardsListComponent },
  { path: 'card/:id', component: CardDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
