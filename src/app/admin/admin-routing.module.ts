import { WaitersComponent } from './waiters/waiters.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NgModule } from '@angular/core';
import { RegisterWaiterComponent } from './register-waiter/register-waiter.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login'
  },
  { path: 'login', component: AdminLoginComponent },
  { path: 'waiters', component: WaitersComponent },
  { path: 'register-waiter', component: RegisterWaiterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
