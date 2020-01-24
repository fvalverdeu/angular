import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressCompleteComponent } from './progress-complete.component';
import { ProgressBarModule } from 'primeng/progressbar';


@NgModule({
  declarations: [ProgressCompleteComponent],
  imports: [
    CommonModule, ProgressBarModule
  ],
  exports: [ ProgressCompleteComponent ]

})
export class UIProgressCompleteModule { }
