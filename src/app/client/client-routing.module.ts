import { ClientRegisterComponent } from './client-register/client-register.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { ClientReservationsComponent } from './client-reservations/client-reservations.component';
import { OrderComponent } from './order/order.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ClientGuard } from '../shared/guards/client.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login'
  },
  { path: 'login', component: ClientLoginComponent },
  { path: 'register', component: ClientRegisterComponent },
  { path: 'profile', component: ClientProfileComponent, canActivate: [ClientGuard] },
  { path: 'make-reservation', component: MakeReservationComponent, canActivate: [ClientGuard] },
  { path: 'my-reservations', component: ClientReservationsComponent, canActivate: [ClientGuard] },
  { path: 'order', component: OrderComponent, canActivate: [ClientGuard] },
  { path: 'order-history', component: OrderHistoryComponent, canActivate: [ClientGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
