import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SessionService} from '@wkmg/commons/services';
import {UserRol} from '@wkmg/commons/classes';

@Injectable()
export class PermissionGuard implements CanActivate  {

  constructor(
    private session: SessionService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const permissions = route.data.permissions as UserRol[];
    console.log(this.session.token);
    console.log(this.session.user);
    const hasPermission = this.session.user.isAuthorized(permissions);
    if (!hasPermission) {
      // this.router.navigateByUrl('/auth');
    }
    return hasPermission;
  }

}
