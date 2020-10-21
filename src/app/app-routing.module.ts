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
  { path: 'reservationlist', component: ReservationListComponent }
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


