import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {RoleGuard} from './role.guard';
import {AuthGuard} from './auth.guard';

@NgModule({
  imports: [
    RouterModule
  ],
  providers: [ RoleGuard, AuthGuard ]
})
export class PortalGuardsModule { }
