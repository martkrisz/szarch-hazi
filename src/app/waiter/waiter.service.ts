import { ReservationDto, OrderDto } from './../models/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WaiterService {
  constructor(private http: HttpClient) {}

  getReservations(): Observable<ReservationDto[]> {
    return this.http.get<ReservationDto[]>(`${environment.backendBaseUrl}/waiter/reservation`);
  }

  makeReservation(reservationDto: ReservationDto): Observable<any> {
    const body = JSON.stringify(reservationDto);
    return this.http.post(`${environment.backendBaseUrl}/waiter/reservation`, body);
  }

  editReservation(reservationDto: ReservationDto): Observable<any> {
    const body = JSON.stringify( reservationDto );
    return this.http.put(`${environment.backendBaseUrl}/waiter/reservation`, body);
  }

  deleteReservation(reservationId: string): Observable<any> {
    return this.http.delete(`${environment.backendBaseUrl}/waiter/reservation/${reservationId}`);
  }

  getOrders(): Observable<OrderDto[]> {
    return this.http.get<OrderDto[]>(`${environment.backendBaseUrl}/waiter/order`);
  }

  getOrderByTable(talbeId: string): Observable<OrderDto> {
    return this.http.get<OrderDto>(
      `${environment.backendBaseUrl}/waiter/order-by-table/${talbeId}`
    );
  }

  modifyOrderByTable(tableId: string, orderDto: OrderDto): Observable<any> {
    const body = JSON.stringify( orderDto );
    return this.http.put<OrderDto>(
      `${environment.backendBaseUrl}/waiter/order-by-table/${tableId}`,
      body
    );
  }

  getOrderById(orderId: string): Observable<OrderDto> {
    return this.http.get<OrderDto>(
      `${environment.backendBaseUrl}/waiter/order-by-table/${orderId}`
    );
  }

  deleteOrderById(orderId: string): Observable<any> {
    return this.http.delete<any>(`${environment.backendBaseUrl}/waiter/order-by-table/${orderId}`);
  }

  finishOrder(orderId: string): Observable<any> {
    return this.http.post<OrderDto>(
      `${environment.backendBaseUrl}/waiter/order-by-table/${orderId}/finish`,
      null
    );
  }

  getReceipt(orderId: string): Observable<any> {
    return this.http.get<any>(
      `${environment.backendBaseUrl}/waiter/order-by-table/${orderId}/receipt`
    );
  }
}
