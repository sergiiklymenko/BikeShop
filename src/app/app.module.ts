import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BikeListComponent } from './bikes/bike-list/bike-list.component';
import { BikeItemComponent } from './bikes/bike-list/bike-item/bike-item.component';
import { BikesComponent } from './bikes/bikes.component';
import {BikeService} from './bikes/bike.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BikeListComponent,
    BikeItemComponent,
    BikesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
