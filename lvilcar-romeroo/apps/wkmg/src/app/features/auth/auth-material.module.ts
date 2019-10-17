import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatSnackBarModule
} from '@angular/material';

const MODULES = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class AuthMaterialModule { }
