import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../home/inicio/inicio.component'
import { ContactoComponent } from '../home/contacto/contacto.component'

const routes: Routes = [
  {path:"contacto", component: ContactoComponent},
  {path:"", component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
