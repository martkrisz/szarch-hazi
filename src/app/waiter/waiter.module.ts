import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaiterProfileComponent } from './waiter-profile/waiter-profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [WaiterProfileComponent]
})
export class WaiterModule { }
