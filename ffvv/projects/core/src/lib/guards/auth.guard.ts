import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {SessionService} from '@portal/core/services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // let url: string = state.url;
    return this.checkLogin();
  }
  checkLogin(): boolean {
    if (this.sessionService.isAuthenticated()) { return true; }
    // Store the attempted URL for redirecting
    // this.authService.redirectUrl = url;
    // Navigate to the login page with extras
    this.router.navigateByUrl('/auth/sign-in');
    return false;
  }
}
