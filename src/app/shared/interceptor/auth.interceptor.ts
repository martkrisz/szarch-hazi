import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const waiterToken = localStorage.getItem('waiterToken');
    const clientToken = localStorage.getItem('clientToken');
    const adminToken = localStorage.getItem('adminToken');
    let currentToken;
    if (waiterToken) {
      currentToken = JSON.parse(waiterToken).token;
    }
    if (clientToken) {
      currentToken = JSON.parse(clientToken).token;
    }
    if (adminToken) {
      currentToken = JSON.parse(adminToken).token;
    }

    let clone: HttpRequest<any> = request.clone();
    if (currentToken) {
      if (currentToken && !request.url.endsWith('login')) {
        clone = request.clone({
          setHeaders: {
            Accept: `application/json`,
            'Content-Type': `application/json`,
            Authorization: `Bearer ${currentToken}`
          }
        });
      } else {
        clone = request.clone({
          setHeaders: {
            Accept: `application/json`,
            'Content-Type': `application/json`
          }
        });
      }
    } else {
      clone = request.clone({
        setHeaders: {
          Accept: `application/json`,
          'Content-Type': `application/json`
        }
      });
    }
    return next.handle(clone);
  }
}
