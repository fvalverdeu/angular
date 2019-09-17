import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'consultants',
    loadChildren: './modules/consultants/consultants.module#ConsultantsModule',
  },
  {
    path: 'kpis',
    loadChildren: './modules/kpis/kpis.module#KpisModule',
    data: { preload: true }
  },
  {
    path: '',
    redirectTo: 'consultants',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
