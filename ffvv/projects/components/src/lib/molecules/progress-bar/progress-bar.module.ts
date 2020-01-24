import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [ ProgressBarComponent ],
  imports: [
    CommonModule, ProgressBarModule
  ],
  exports: [ ProgressBarComponent ]
})
export class UIProgressBarModule { }
