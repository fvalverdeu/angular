import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {SessionService} from '@portal/core/services';

@Injectable() // provide-in: se agrega cuando lo necesito en el modulo principal
export class RoleGuard implements CanActivate {
  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.switchHome(next);
  }
  switchHome(next: ActivatedRouteSnapshot): boolean {
    const expectedRole = next.data.expectedRole;
    const user = this.sessionService.getUser();
    if (!this.sessionService.isAuthenticated() || !user || user.role !== expectedRole) {
      this.router.navigateByUrl('/auth/sign-in');
      return false;
    }
    return true;
  }
}
