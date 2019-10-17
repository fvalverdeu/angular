import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';
import {MaterialModule} from '../material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {WorkshopFormComponent} from './workshop-form/workshop-form.component';
import { FileFormComponent } from './file-form/file-form.component';

const COMPONENTS = [
  InstructorFormComponent,
  WorkshopFormComponent,
  FileFormComponent
];

@NgModule({
  entryComponents: [
    InstructorFormComponent,
    WorkshopFormComponent,
    FileFormComponent
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
