import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserScreenComponent } from './components/user-screen/user-screen.component';
import { AdminScreenComponent } from './components/admin-screen/admin-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TablesComponent } from './components/tables/tables.component';
import { AddTableComponent } from './components/add-table/add-table.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserScreenComponent,
    AdminScreenComponent,
    NavbarComponent,
    TablesComponent,
    AddTableComponent,
    ReservationsComponent,
    AddReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
