import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BikeListComponent} from './bikes/bike-list/bike-list.component';
import {BikeItemComponent} from './bikes/bike-list/bike-item/bike-item.component';
import {BikesComponent} from './bikes/bikes.component';
import {BikeDetailComponent} from './bikes/bike-detail/bike-detail.component';
import {RouterModule, Routes} from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import { RequestFormComponent } from './request-form/request-form.component';

const appRoutes: Routes = [
  {path: 'bikes', component: BikesComponent},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'request-form', component: RequestFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BikeListComponent,
    BikeItemComponent,
    BikesComponent,
    BikeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RequestFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
