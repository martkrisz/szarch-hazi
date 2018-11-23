import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { WaitersComponent } from './waiters/waiters.component';
import { RegisterWaiterComponent } from './register-waiter/register-waiter.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [AdminRoutingModule, SharedModule],
  declarations: [AdminLoginComponent, WaitersComponent, RegisterWaiterComponent]
})
export class AdminModule {}
