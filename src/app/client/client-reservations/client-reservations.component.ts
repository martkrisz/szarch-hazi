import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-reservations',
  templateUrl: './client-reservations.component.html',
  styleUrls: ['./client-reservations.component.scss']
})
export class ClientReservationsComponent implements OnInit {

  reservations = [];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getReservations().subscribe(reservations => this.reservations);
  }

  deleteReservation(reservationId: string) {
    this.clientService.deleteReservation(reservationId).subscribe();
  }
}
