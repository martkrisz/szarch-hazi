import { WaiterProfileComponent } from './waiter-profile/waiter-profile.component';
import { WaiterLoginComponent } from './waiter-login/waiter-login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login'
  },
  { path: 'login', component: WaiterLoginComponent },
  { path: 'profile', component: WaiterProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterRoutingModule { }
