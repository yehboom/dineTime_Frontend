import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { AddTableComponent } from './add-table/add-table.component';
import { TableListComponent } from './table-list/table-list.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { LoginBusinessComponent } from './login-business/login-business.component';




@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    LoginComponent,
    SearchComponent,
    ReservationListComponent,
    AddTableComponent,
    TableListComponent,
    FirstComponentComponent,
    LoginBusinessComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // imports: [RouterModule.forRoot(routes)],

})
export class AppModule { }
