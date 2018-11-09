import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class ClientGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate() {
    if (this.authService.isLoggedInAsClient()) {
      return true;
    } else {
      this.authService.logout();
      return false;
    }
  }
}
