import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BikesComponent} from './bikes/bikes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RequestFormComponent} from './request-form/request-form.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BikeStartComponent} from './bikes/bike-start/bike-start.component';
import {BikeDetailComponent} from './bikes/bike-detail/bike-detail.component';
import {BikeEditComponent} from './bikes/bike-edit/bike-edit.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/bikes', pathMatch: 'full'},
  {path: 'bikes', component: BikesComponent, children: [
      {path: '', component: BikeStartComponent},
      {path: 'new', component: BikeEditComponent},
      {path: ':id', component: BikeDetailComponent},
      {path: ':id/edit', component: BikeEditComponent}
    ]},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'request-form', component: RequestFormComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
