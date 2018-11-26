import { UserDto } from './../models/models';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getWaiters(): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(`${environment.backendBaseUrl}/admin/waiter`);
  }

  registerWaiter(waiter: UserDto): Observable<any> {
    const body = JSON.stringify(waiter);
    return this.http.post(`${environment.backendBaseUrl}/admin/waiter`, body);
  }

  deleteWaiter(waiterId: string): Observable<any> {
    return this.http.delete(`${environment.backendBaseUrl}/admin/waiter/${waiterId}`);
  }
}
