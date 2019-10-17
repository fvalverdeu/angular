import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {WkmgServicesModule} from '@wkmg/commons/services';
import {AuthenticatedGuard} from './authenticated.guard';
import {PermissionGuard} from './permission.guard';

@NgModule({
  imports: [
    WkmgServicesModule,
    RouterModule
  ],
  providers: [
    AuthenticatedGuard,
    PermissionGuard
  ]
})
export class WkmgGuardsModule { }
