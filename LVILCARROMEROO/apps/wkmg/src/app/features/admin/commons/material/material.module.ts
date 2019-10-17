import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatTableModule,
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatSelectModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';

const MODULES = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,

  // Modal
  MatDialogModule,

  // Form
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,

  // Date picker
  MatDatepickerModule,
  MatNativeDateModule,

  // Paginator
  MatPaginatorModule,

  // Table Sorter
  MatSortModule
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class MaterialModule { }
