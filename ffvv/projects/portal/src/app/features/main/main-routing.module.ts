import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main.component';
import {HomeSeComponent} from './pages/home-se/home-se.component';
import {HomeGrComponent} from './pages/home-gr/home-gr.component';
import {RoleGuard} from '@portal/core/guards';
import {UserRolEnum} from '@portal/core/constants';
import { HomeGzComponent } from './pages/home-gz/home-gz.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home-se',
        component: HomeSeComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: UserRolEnum.SOCIA_EMPRESARIA
        }
      },
      {
        path: 'home-gr',
        component: HomeGrComponent
      },
      {
        path: 'home-gz',
        component: HomeGzComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: UserRolEnum.GERENTE_ZONA
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
