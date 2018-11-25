import { Component, OnInit, Input } from '@angular/core';
import { ReservationDto } from '../../models/models';
import { WaiterService } from '../waiter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-reservation',
  templateUrl: './single-reservation.component.html',
  styleUrls: ['./single-reservation.component.scss']
})
export class SingleReservationComponent implements OnInit {
  @Input() reservation: ReservationDto;

  constructor(private waiterService: WaiterService, private router: Router) {}

  ngOnInit() {}

  confirmReservation() {
    this.reservation.status = 'CONFIRMED';
    this.waiterService.editReservation(this.reservation).subscribe();
  }

  deleteReservation() {
    this.waiterService.deleteReservation(this.reservation.reservationId).subscribe();
  }

  routeToModify() {
    this.router.navigate([`waiter/modify-reservation/${this.reservation.reservationId}`]);
  }
}
