import { AuthService } from './../../shared/auth.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  clientLoggedIn: Observable<boolean>;
  waiterLoggedIn: Observable<boolean>;
  adminLoggedIn: Observable<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.clientLoggedIn = this.authService.isLoggedInAsClientAsObservable();
    this.waiterLoggedIn = this.authService.isLoggedInAsWaiterAsObservable();
    this.adminLoggedIn = this.authService.isLoggedInAsAdminAsObservable();
  }
}
