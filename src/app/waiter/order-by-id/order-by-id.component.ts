import { Component, OnInit } from '@angular/core';
import { WaiterService } from '../waiter.service';
import { OrderDto } from '../../models/models';

@Component({
  selector: 'app-order-by-id',
  templateUrl: './order-by-id.component.html',
  styleUrls: ['./order-by-id.component.scss']
})
export class OrderByIdComponent implements OnInit {
  order: OrderDto;

  constructor(private waiterService: WaiterService) {}

  ngOnInit() {}
}
