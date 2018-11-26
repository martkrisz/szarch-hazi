import { ReservationDto } from './../../models/reservationDto';
import { WaiterService } from './../waiter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  reservations: ReservationDto[];

  constructor(private waiterService: WaiterService) { }

  ngOnInit() {
    this.getReservations();
  }

  getReservations() {
    this.waiterService.getReservations().subscribe(reservations => this.reservations = reservations);
  }
}
