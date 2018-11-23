import { ClientRoutingModule } from './client-routing.module';
import { NgModule } from '@angular/core';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { SearchReservationComponent } from './search-reservation/search-reservation.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ClientRoutingModule, SharedModule],
  declarations: [
    ClientLoginComponent,
    ClientRegisterComponent,
    SearchReservationComponent,
    MakeReservationComponent,
    ClientProfileComponent
  ]
})
export class ClientModule {}
