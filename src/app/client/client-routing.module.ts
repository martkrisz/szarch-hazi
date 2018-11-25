import { ClientRegisterComponent } from './client-register/client-register.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { ClientReservationsComponent } from './client-reservations/client-reservations.component';
import { OrderComponent } from './order/order.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login'
  },
  { path: 'login', component: ClientLoginComponent },
  { path: 'register', component: ClientRegisterComponent },
  { path: 'profile', component: ClientProfileComponent },
  { path: 'make-reservation', component: MakeReservationComponent },
  { path: 'my-reservations', component: ClientReservationsComponent },
  { path: 'order', component: OrderComponent },
  { path: 'order-history', component: OrderHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
