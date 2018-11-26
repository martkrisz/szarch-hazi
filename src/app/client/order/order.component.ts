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
  sum = 0;

  constructor(private clientService: ClientService, private authService: AuthService) {}

  ngOnInit() {
    this.clientService.getMenu().subscribe(menu => {
      this.menu = menu;
      this.authService.getProfile().subscribe(profile => {
        this.discount = profile.loyaltyPoints;
        this.clientService.cart$.subscribe(cart => {
          if (cart) {
            this.cart = cart;
            this.calculateSum();
          }
        });
      });
    });
  }

  updateCart(cartItem: CartItemDto, isAdd: boolean) {
    if (this.cart.every(item => item.menuItemId !== cartItem.menuItemId)) {
      cartItem.amount = 1;
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
        this.cart.splice(index, 1);
      }
    });
    if (this.cart.length) {
      this.clientService.updateCart(this.cart);
    }
    this.calculateSum();
  }

  order() {
    if (this.discountFlag) {
      this.clientService.createOrder(this.cart, this.discount).subscribe(this.emptycart);
    } else {
      this.clientService.createOrder(this.cart, 0).subscribe(this.emptycart);
    }
  }

  emptycart = () => {
    this.clientService.clearCart();
    this.authService.getProfile().subscribe(profile => this.discount = profile.loyaltyPoints);
  }

  calculateSum() {
    this.sum = 0;
    this.cart.forEach(cartItem => {
      const item = this.menu.find(menuItem => cartItem.menuItemId === menuItem.menuItemId);
      this.sum += item.price * cartItem.amount;
    });
    if (this.discountFlag) {
      this.sum *= (1 - this.discount / 100);
    }
  }
}
