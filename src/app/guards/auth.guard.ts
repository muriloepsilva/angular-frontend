import { Injectable, inject } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/authService/auth.service';

@Injectable({ providedIn: 'root' })
export class LoggedInGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private routerService: Router
  ) {}
  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    this.routerService.navigate(['/']);
    return false;
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(LoggedInGuard).canActivate();
};
