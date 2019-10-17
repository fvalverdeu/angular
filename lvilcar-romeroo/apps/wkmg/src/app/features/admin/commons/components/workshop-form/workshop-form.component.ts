import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import * as moment from 'moment';
import {InstructorModel, WorkshopInterface} from '@wkmg/commons/classes';

@Component({
  selector: 'app-workshop-form',
  templateUrl: './workshop-form.component.html',
  styleUrls: ['./workshop-form.component.scss']
})
export class WorkshopFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<WorkshopFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { workshop?: WorkshopInterface, instructors: InstructorModel[]}
  ) {
    this.form = this.fb.group({
      _id: '',
      date: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      description: ['', Validators.required],
      name: ['', Validators.required],
      instructor: ['', Validators.required],
      publish: false
    });
  }

  get dateField() {
    return this.form.get('date');
  }

  get startField() {
    return this.form.get('start');
  }

  get endField() {
    return this.form.get('end');
  }

  get descriptionField() {
    return this.form.get('description');
  }

  get nameField() {
    return this.form.get('name');
  }

  get instructorField(): AbstractControl {
    return this.form.get('instructor');
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  ngOnInit() {
    if (this.data.workshop) {
      const { _id, date, start, end, description, name, instructor, publish} = this.data.workshop;
      this.form.patchValue({
        _id, date, description, name, publish,
        instructor: instructor._id,
        start: moment(start).format('HH:mm'),
        end: moment(end).format('HH:mm')
      });
    }
  }

}
