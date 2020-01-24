import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ComponentsComponent]
})
export class ComponentsModule {}
