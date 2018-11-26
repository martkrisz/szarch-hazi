import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() emitter: EventEmitter<boolean>;

  constructor(private waiterService: WaiterService, private router: Router) {
    this.emitter = new EventEmitter<boolean>();
  }

  ngOnInit() {}

  confirmReservation() {
    this.reservation.status = 'Confirmed';
    this.waiterService.editReservation(this.reservation).subscribe();
  }

  deleteReservation() {
    this.waiterService.deleteReservation(this.reservation.reservationId).subscribe(() => {
      this.emitter.emit(true);
    });
  }

  routeToModify() {
    this.router.navigate([`waiter/modify-reservation/${this.reservation.reservationId}`]);
  }
}
