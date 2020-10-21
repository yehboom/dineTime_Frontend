import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { TestComponent } from './test/test.component';




@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    LoginComponent,
    SearchComponent,
    TestComponent
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
