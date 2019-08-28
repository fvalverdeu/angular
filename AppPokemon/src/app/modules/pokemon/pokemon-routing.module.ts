import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: PokemonComponent
  }
];

 @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 })
 export class PokemonRoutingModule {

 }
