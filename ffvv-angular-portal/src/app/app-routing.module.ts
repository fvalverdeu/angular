import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'consultants',
    loadChildren: './modules/consultants/consultants.module#ConsultantsModule',
  },
  {
    path: 'kpis',
    loadChildren: './modules/kpis/kpis.module#KpisModule',
  },
  {
    path: '',
    redirectTo: 'consultants',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
