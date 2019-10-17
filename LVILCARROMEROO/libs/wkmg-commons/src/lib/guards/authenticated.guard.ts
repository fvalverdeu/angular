import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {SessionService} from '@wkmg/commons/services';

@Injectable()
export class AuthenticatedGuard implements CanActivate  {

  constructor(
    private session: SessionService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const isAuthenticated = !!this.session.token;
    if (!isAuthenticated) {
      this.router.navigateByUrl('/auth');
    }
    return isAuthenticated;
  }

}
