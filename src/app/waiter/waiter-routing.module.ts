import { WaiterProfileComponent } from './waiter-profile/waiter-profile.component';
import { WaiterLoginComponent } from './waiter-login/waiter-login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReservationsComponent } from './reservations/reservations.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { ModifyReservationComponent } from './modify-reservation/modify-reservation.component';
import { WaiterGuard } from '../shared/guards/waiter.guard';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login'
  },
  { path: 'login', component: WaiterLoginComponent },
  { path: 'profile', component: WaiterProfileComponent, canActivate: [WaiterGuard] },
  { path: 'reservations', component: ReservationsComponent, canActivate: [WaiterGuard] },
  { path: 'new-reservation', component: NewReservationComponent, canActivate: [WaiterGuard] },
  {
    path: 'modify-reservation/:reservationId',
    component: ModifyReservationComponent,
    canActivate: [WaiterGuard]
  },
  { path: 'orders', component: OrdersComponent, canActivate: [WaiterGuard]},
  { path: 'order-by-table/:tableId' , canActivate: [WaiterGuard]},
  { path: 'order/:orderId' , canActivate: [WaiterGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterRoutingModule {}
