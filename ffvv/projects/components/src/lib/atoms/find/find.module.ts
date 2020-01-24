import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindComponent } from './find.component';


@NgModule({
  declarations: [FindComponent],
  imports: [
    CommonModule
  ],
  exports: [FindComponent]
})
export class UIFindModule { }
