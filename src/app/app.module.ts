import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GearListComponent } from './gear-packages/gear-list/gear-list.component';
import { GearItemComponent } from './gear-packages/gear-list/gear-item/gear-item.component';
import { GearPackagesComponent } from './gear-packages/gear-packages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GearListComponent,
    GearItemComponent,
    GearPackagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
