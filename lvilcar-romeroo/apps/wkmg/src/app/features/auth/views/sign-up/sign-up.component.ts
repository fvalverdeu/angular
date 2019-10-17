import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../commons/http/auth.service';
import {passwordStrong} from '@wkmg/commons/utils';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  authForm: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordStrong]]
    });
  }

  get emailField() {
    return this.authForm.get('email');
  }

  get passwordField() {
    return this.authForm.get('password');
  }

  ngOnInit() {
  }

  signUp() {
    if (this.authForm.invalid) { return; }
    this.authService.signUp(this.authForm.value)
      .subscribe(
        res => console.log(res),
        err => console.log(err),
      );
  }
}
