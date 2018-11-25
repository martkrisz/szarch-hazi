import { WaiterProfileComponent } from './waiter-profile/waiter-profile.component';
import { WaiterLoginComponent } from './waiter-login/waiter-login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReservationsComponent } from './reservations/reservations.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { ModifyReservationComponent } from './modify-reservation/modify-reservation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login'
  },
  { path: 'login', component: WaiterLoginComponent },
  { path: 'profile', component: WaiterProfileComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'new-reservation', component: NewReservationComponent },
  { path: 'modify-reservation/:reservationId', component: ModifyReservationComponent },
  { path: 'order-by-table/:tableId' },
  { path: 'order/:orderId' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterRoutingModule {}
