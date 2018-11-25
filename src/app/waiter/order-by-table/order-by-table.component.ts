import { Component, OnInit } from '@angular/core';
import { WaiterService } from '../waiter.service';
import { OrderDto } from '../../models/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-by-table',
  templateUrl: './order-by-table.component.html',
  styleUrls: ['./order-by-table.component.scss']
})
export class OrderByTableComponent implements OnInit {
  order: OrderDto;
  tableId: string;
  finished = false;

  constructor(private waiterService: WaiterService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tableId = params[this.tableId];
      this.waiterService.getOrderByTable(this.tableId).subscribe(order => this.order);
    });
  }

  modifyOrder() {
    this.waiterService.modifyOrderByTable(this.tableId, this.order);
  }

  finishOrder() {
    this.waiterService.finishOrder(this.order.orderId).subscribe(() => {
      this.finished = true;
    });
  }

  getReceipt() {
    this.waiterService.getReceipt(this.order.orderId).subscribe(data => {
      const blob = new Blob([data], { type: 'pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
}
