import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../commons/http/auth.service';
import {Router} from '@angular/router';
import {SessionService} from '@wkmg/commons/services';
import {MatSnackBar} from '@angular/material';
import {HttpErrorResponse} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  authForm: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private translate: TranslateService
  ) {
    this.authForm = this.fb.group({
      email: ['admin@galaxy.edu.pe', [Validators.required, Validators.email]],
      password: ['123456', Validators.required] // passwordStrong
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

  signIn() {
    if (this.authForm.invalid) { return; }
    this.authService.signIn(this.authForm.value)
      .subscribe(
        res => {
          this.sessionService.create(res.token);
          // redireccionar
          this.router.navigateByUrl('/admin');
        },
        (err: HttpErrorResponse) => {
          const status = String(err.status);
          this.translate.get(status)
            .subscribe((res: string) => {
              this._snackBar.open(res, 'Ok' ,  { duration: 2000 });
            });
        },
      );
  }

  changeLang(lang: string) {
    console.log(lang);
    this.translate.use(lang)
      .subscribe(res => console.log(res));
  }

}
