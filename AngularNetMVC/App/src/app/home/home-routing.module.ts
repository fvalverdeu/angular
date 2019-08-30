import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {
    path: 'contacto', component: ContactoComponent
  },
  {
    path: 'inicio', component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {

}
