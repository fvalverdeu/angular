import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KpisComponent} from './kpis.component';
import { RetentionSeComponent } from './pages/retention/retention-se/retention-se.component';
import { GainSeComponent } from './pages/gain/gain-se/gain-se.component';
import {SalesSeComponent} from './pages/sales/sales-se/sales-se.component';
import {RoleGuard} from '@portal/core/guards';
import {UserRolEnum} from '@portal/core/constants';
import { GainGzComponent } from './pages/gain/gain-gz/gain-gz.component';
import {SalesGzComponent} from './pages/sales/sales-gz/sales-gz.component';
import { RetentionGzComponent } from './pages/retention/retention-gz/retention-gz.component';

const routes: Routes = [
  {
    path: '',
    component: KpisComponent,
    children: [
      {
        path: 'gain-se',
        component: GainSeComponent,
        canActivate: [RoleGuard],
        data: { expectedRole: UserRolEnum.SOCIA_EMPRESARIA }
      },
      {
        path: 'retention-se',
        component: RetentionSeComponent,
        canActivate: [RoleGuard],
        data: { expectedRole: UserRolEnum.SOCIA_EMPRESARIA }
      },
      {
        path: 'sales-se',
        component: SalesSeComponent,
        canActivate: [RoleGuard],
        data: { expectedRole: UserRolEnum.SOCIA_EMPRESARIA }
      },
      {
        path: 'gain-gz',
        component: GainGzComponent,
        canActivate: [RoleGuard],
        data: { expectedRole: UserRolEnum.GERENTE_ZONA }
      },
      {
        path: 'sales-gz',
        component: SalesGzComponent,
        canActivate: [RoleGuard],
        data: { expectedRole: UserRolEnum.GERENTE_ZONA }
      },
      {
        path: 'retention-gz',
        component: RetentionGzComponent,
        canActivate: [RoleGuard],
        data: { expectedRole: UserRolEnum.GERENTE_ZONA }
      },
      {
        path: 'gain-gz/:section',
        component: GainGzComponent,
        canActivate: [RoleGuard],
        data: { expectedRole: UserRolEnum.GERENTE_ZONA }
      },
      {
        path: 'sales-gz/:section',
        component: SalesGzComponent,
        canActivate: [RoleGuard],
        data: { expectedRole: UserRolEnum.GERENTE_ZONA }
      },
      {
        path: 'retention-gz/:section',
        component: RetentionGzComponent,
        canActivate: [RoleGuard],
        data: { expectedRole: UserRolEnum.GERENTE_ZONA }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KpisRoutingModule { }
