import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsultantsRoutingModule } from './consultants-routing.module';
import { HomePage } from './pages';

@NgModule({
  imports: [ConsultantsRoutingModule, CommonModule, FormsModule],
  declarations: [HomePage],
  providers: []
})
export class ConsultantsModule {
}
