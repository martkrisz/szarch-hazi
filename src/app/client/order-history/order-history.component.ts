import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  orders = [];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getOrders().subscribe(orders => this.orders);
  }

  onClick($event, orderId: string) {
    this.clientService.rate({ orderId: orderId, rating: $event.rating }).subscribe();
  }

}
