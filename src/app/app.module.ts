import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { EstimateComponent } from './components/estimate/estimate.component';

// routes
import { AppRoutingModule } from './config/routes.module';

@NgModule({
  declarations: [
    AppComponent,
    CardsListComponent,
    CardDetailComponent,
    EstimateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
