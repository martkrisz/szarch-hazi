import { WaiterRoutingModule } from './waiter-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { WaiterProfileComponent } from './waiter-profile/waiter-profile.component';
import { WaiterLoginComponent } from './waiter-login/waiter-login.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderByIdComponent } from './order-by-id/order-by-id.component';
import { OrderByTableComponent } from './order-by-table/order-by-table.component';
import { SingleReservationComponent } from './single-reservation/single-reservation.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { ModifyReservationComponent } from './modify-reservation/modify-reservation.component';

@NgModule({
  imports: [WaiterRoutingModule, SharedModule],
  declarations: [WaiterProfileComponent, WaiterLoginComponent, ReservationsComponent, OrdersComponent, OrderByIdComponent, OrderByTableComponent, SingleReservationComponent, NewReservationComponent, ModifyReservationComponent]
})
export class WaiterModule {}
