import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardHeaderComponent} from './card-header.component';

@NgModule({
  declarations: [CardHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [CardHeaderComponent]
})
export class UICardHeaderModule { }
