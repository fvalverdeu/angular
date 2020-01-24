import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import {CheckboxModule} from 'primeng/checkbox';


@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    CheckboxModule
  ],
  exports: [ CheckboxModule]
})
export class UICheckboxModule { }
