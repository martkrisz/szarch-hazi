import { AdminGuard } from './guards/admin.guard';
import { WaiterGuard } from './guards/waiter.guard';
import { ClientGuard } from './guards/client.guard';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { StarRatingModule } from 'angular-star-rating';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    JwtModule,
    TranslateModule,
    StarRatingModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  declarations: [],
  providers: [ClientGuard, WaiterGuard, AdminGuard],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    JwtModule,
    TranslateModule,
    StarRatingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ]
})
export class SharedModule { }
