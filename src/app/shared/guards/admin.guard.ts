import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate() {
    if (this.authService.isLoggedInAsAdmin()) {
      return true;
    } else {
      this.authService.logout();
      return false;
    }
  }
}
