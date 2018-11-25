import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { CartItemDto } from '../../../app/models/models';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  menu = [];
  cart = [];
  discount = 0;
  discountFlag = false;

  constructor(private clientService: ClientService, private authService: AuthService) {}

  ngOnInit() {
    this.clientService.getMenu().subscribe(menu => this.menu);
    this.clientService.cart$.subscribe(cart => this.cart);
    this.authService.getProfile().subscribe(profile => {
      this.discount = profile.loyaltyPoints;
    });
  }

  updateCart(cartItem: CartItemDto, isAdd: boolean) {
    if (this.cart.every(item => item.menuItemId !== cartItem.menuItemId)) {
      this.cart.push(cartItem);
    } else {
      if (isAdd) {
        this.cart[this.cart.findIndex(item => item.menuItemId === cartItem.menuItemId)].amount++;
      } else {
        this.cart[this.cart.findIndex(item => item.menuItemId === cartItem.menuItemId)].amount--;
      }
    }
    this.cart.forEach((item, index) => {
      if (item.amount === 0) {
        this.cart = this.cart.splice(index, 1);
      }
    });
    this.clientService.updateCart(this.cart);
  }

  order() {
    if (this.discountFlag) {
      this.clientService.createOrder(this.cart, this.discount).subscribe();
    } else {
      this.clientService.createOrder(this.cart, 0).subscribe();
    }
  }
}
