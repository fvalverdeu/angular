import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {InstructorInterface} from '@wkmg/commons/classes';

@Component({
  selector: 'app-instructor-form',
  templateUrl: './instructor-form.component.html',
  styleUrls: ['./instructor-form.component.scss']
})
export class InstructorFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<InstructorFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { instructor?: InstructorInterface }
  ) {
    this.form = this.fb.group({
      _id: null,
      title: ['', Validators.required],
      names: ['', Validators.required],
      lastNames: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
    });
  }

  get title() {
    return this.form.get('title');
  }

  get names() {
    return this.form.get('names');
  }

  get lastNames() {
    return this.form.get('lastNames');
  }

  get mail() {
    return this.form.get('mail');
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
    const { _id, title, names, lastNames, mail } = this.data.instructor;
    this.form.patchValue({
      _id, title, names, lastNames, mail
    });
  }

}
