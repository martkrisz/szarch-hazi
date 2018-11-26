import { UserDto } from './../models/userDto';
import { LoginDto } from './../models/loginDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInAsClient: BehaviorSubject<boolean>;
  private loggedInAsWaiter: BehaviorSubject<boolean>;
  private loggedInAsAdmin: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private router: Router) {
    this.loggedInAsClient = new BehaviorSubject<boolean>(this.isLoggedInAsClient());
    this.loggedInAsWaiter = new BehaviorSubject<boolean>(this.isLoggedInAsWaiter());
    this.loggedInAsAdmin = new BehaviorSubject<boolean>(this.isLoggedInAsAdmin());
  }

  isLoggedInAsClient(): boolean {
    const token = localStorage.getItem('clientToken');
    try {
      return !helper.isTokenExpired(token);
    } catch (e) {
      return false;
    }
  }

  isLoggedInAsWaiter(): boolean {
    const token = localStorage.getItem('waiterToken');
    try {
      return !helper.isTokenExpired(token);
    } catch (e) {
      return false;
    }
  }

  isLoggedInAsAdmin(): boolean {
    const token = localStorage.getItem('adminToken');
    try {
      return !helper.isTokenExpired(token);
    } catch (e) {
      return false;
    }
  }

  isLoggedInAsClientAsObservable() {
    return this.loggedInAsClient.asObservable();
  }

  isLoggedInAsWaiterAsObservable() {
    return this.loggedInAsWaiter.asObservable();
  }

  isLoggedInAsAdminAsObservable() {
    return this.loggedInAsAdmin.asObservable();
  }

  login(loginDto: LoginDto): Observable<Boolean> {
    const body = JSON.stringify({
      email: loginDto.email,
      password: loginDto.password
    });
    return this.http.post(`${environment.backendBaseUrl}/user/login`, body).pipe(
      map((response: any) => {
        const token = response.jwt;
        if (token) {
          const role = helper.decodeToken(token).role;
          switch (role) {
            case 0:
              localStorage.setItem('clientEmail', JSON.stringify({ user: loginDto.email }));
              localStorage.setItem('clientToken', JSON.stringify({ token: token }));
              this.loggedInAsClient.next(true);
              this.loggedInAsWaiter.next(false);
              this.loggedInAsAdmin.next(false);
              break;
            case 1:
              localStorage.setItem('waiterEmail', JSON.stringify({ user: loginDto.email }));
              localStorage.setItem('waiterToken', JSON.stringify({ token: token }));
              this.loggedInAsClient.next(false);
              this.loggedInAsWaiter.next(true);
              this.loggedInAsAdmin.next(false);
              break;
            case 2:
              localStorage.setItem('adminEmail', JSON.stringify({ user: loginDto.email }));
              localStorage.setItem('adminToken', JSON.stringify({ token: token }));
              this.loggedInAsClient.next(false);
              this.loggedInAsWaiter.next(false);
              this.loggedInAsAdmin.next(true);
              break;
            default:
              return false;
          }
          return true;
        } else {
          return false;
        }
      })
    );
  }

  register(userDto: UserDto): Observable<any> {
    const body = JSON.stringify(userDto);
    return this.http.post(`${environment.backendBaseUrl}/user/register`, body);
  }

  getProfile(): Observable<UserDto> {
    return this.http.get<UserDto>(`${environment.backendBaseUrl}/user`);
  }

  editProfile(userDto: UserDto): Observable<any> {
    const body = JSON.stringify(userDto);
    return this.http.put(`${environment.backendBaseUrl}/user`, body);
  }

  logout() {
    this.loggedInAsClient.next(false);
    this.loggedInAsWaiter.next(false);
    this.loggedInAsAdmin.next(false);
    localStorage.clear();
    this.router.navigate(['']);
  }
}
