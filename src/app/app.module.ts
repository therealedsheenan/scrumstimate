import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';

// routes
import { AppRoutingModule } from './config/routes.module';

// services
import { CardService } from './services/card.service';

@NgModule({
  declarations: [
    AppComponent,
    CardsListComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
