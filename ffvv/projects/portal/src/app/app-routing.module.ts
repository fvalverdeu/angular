import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from '@portal/core/pages';
import {AuthGuard} from '@portal/core/guards';

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
    path: 'PortalFFVV',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'kpis',
    loadChildren: () => import('./features/kpis/kpis.module').then(m => m.KpisModule)
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
