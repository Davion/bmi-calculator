import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { GenderCardComponent } from './components/gender-card/gender-card.component';
import { HeightCardComponent } from './components/height-card/height-card.component';
import { WeightAgeCardComponent } from './components/weight-age-card/weight-age-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PageContainerComponent,
    GenderCardComponent,
    HeightCardComponent,
    WeightAgeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
