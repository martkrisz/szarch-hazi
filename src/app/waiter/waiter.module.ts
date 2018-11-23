import { WaiterRoutingModule } from './waiter-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { WaiterProfileComponent } from './waiter-profile/waiter-profile.component';
import { WaiterLoginComponent } from './waiter-login/waiter-login.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  imports: [WaiterRoutingModule, SharedModule],
  declarations: [WaiterProfileComponent, WaiterLoginComponent, ReservationsComponent, OrdersComponent]
})
export class WaiterModule {}
