import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { WaitersComponent } from './waiters/waiters.component';
import { RegisterWaiterComponent } from './register-waiter/register-waiter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminLoginComponent, WaitersComponent, RegisterWaiterComponent]
})
export class AdminModule { }
