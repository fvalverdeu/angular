import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticatedGuard} from '@wkmg/commons/guards';
import {PermissionGuard} from '../../../../libs/wkmg-commons/src/lib/guards/permission.guard';
import {UserRol} from '@wkmg/commons/classes';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    canActivate: [ AuthenticatedGuard, PermissionGuard ],
    data: { permissions: [UserRol.ADMIN] },
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
