import { ClientRoutingModule } from './client-routing.module';
import { NgModule } from '@angular/core';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { SharedModule } from '../shared/shared.module';
import { ClientReservationsComponent } from './client-reservations/client-reservations.component';
import { OrderComponent } from './order/order.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

@NgModule({
  imports: [ClientRoutingModule, SharedModule],
  declarations: [
    ClientLoginComponent,
    ClientRegisterComponent,
    MakeReservationComponent,
    ClientProfileComponent,
    ClientReservationsComponent,
    OrderComponent,
    OrderHistoryComponent
  ]
})
export class ClientModule {}
