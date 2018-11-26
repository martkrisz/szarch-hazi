import { WaiterService } from './../waiter.service';
import { Component, OnInit } from '@angular/core';
import { OrderDto } from './../../models/models';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: OrderDto[];

  constructor(private waiterService: WaiterService) { }

  ngOnInit() {
    this.waiterService.getOrders().subscribe(orders => this.orders = orders);
  }

}
