import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module';
import {ComponentsModule} from './components/components.module';

const MODULES = [
  MaterialModule,
  ComponentsModule
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class AdminCommonsModule { }
