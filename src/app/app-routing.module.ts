import { LoginBusinessComponent } from './login-business/login-business.component';
import { tablelist, TableListComponent } from './table-list/table-list.component';
import { AddTableComponent } from './add-table/add-table.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';



// const appRoutes: Routes = [
//   // { path: 'user', loadChildren: './user/user.module#UserModule' },
//   { path: 'reservation', component: ReservationComponent },
// ];

const routes: Routes = [
  { path: 'reservation', component: ReservationComponent },
  { path: 'login',component: LoginComponent},
  { path: 'search', component: SearchComponent },
  { path: 'reservationlist', component: ReservationListComponent },
  { path: 'addtable',component: AddTableComponent},
  { path: 'tablelist' ,component: TableListComponent},
  { path: 'loginb', component: LoginBusinessComponent}
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


