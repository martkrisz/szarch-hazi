import { environment } from './../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservationDto, OrderDto, RatingDto, MenuItemDto, CartItemDto } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private cartSource: BehaviorSubject<CartItemDto[]>;
  cart$: Observable<CartItemDto[]>;

  constructor(private http: HttpClient) {
    this.cartSource = new BehaviorSubject<CartItemDto[]>([]);
    this.cart$ = this.cartSource.asObservable();
  }

  makeReservation(reservationDto: ReservationDto): Observable<any> {
    const body = JSON.stringify({ reservationDto });
    return this.http.post(`${environment.backendBaseUrl}/client/reservation`, body);
  }

  getReservations(): Observable<ReservationDto[]> {
    return this.http.get<ReservationDto[]>(`${environment.backendBaseUrl}/client/reservation`);
  }

  deleteReservation(reservationId: string) {
    return this.http.delete(`${environment.backendBaseUrl}/client/reservation/${reservationId}`);
  }

  createOrder(orderDto: OrderDto): Observable<any> {
    const body = JSON.stringify({ orderDto });
    return this.http.post(`${environment.backendBaseUrl}/client/order`, body);
  }

  getOrders(): Observable<OrderDto[]> {
    return this.http.get<OrderDto[]>(`${environment.backendBaseUrl}/client/order`);
  }

  rate(ratingDto: RatingDto): Observable<any> {
    const body = JSON.stringify({ ratingDto });
    return this.http.post(`${environment.backendBaseUrl}/client/rate`, body);
  }

  getMenu(): Observable<MenuItemDto[]> {
    return this.http.get<MenuItemDto[]>(`${environment.backendBaseUrl}/client/menu`);
  }

  getCart() {
    this.http.get<CartItemDto[]>(`${environment.backendBaseUrl}/client/cart`).subscribe(cart => this.cartSource.next(cart));
  }

  updateCart(cartItemDto: CartItemDto) {
    const body = JSON.stringify({ cartItemDto });
    this.http.put<CartItemDto[]>(`${environment.backendBaseUrl}/client/cart`, body).subscribe(cart => this.cartSource.next(cart));
  }
}
