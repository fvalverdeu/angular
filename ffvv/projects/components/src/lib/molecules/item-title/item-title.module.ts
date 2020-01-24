import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTitleComponent } from './item-title.component';


@NgModule({
  declarations: [ItemTitleComponent],
  imports: [
    CommonModule
  ],
  exports: [ItemTitleComponent]
})
export class UIItemTitleModule { }
