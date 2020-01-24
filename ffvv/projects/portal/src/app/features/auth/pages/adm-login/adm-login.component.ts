import { Component, OnInit } from '@angular/core';
import { SignInPresenter } from '../sign-in.presenter';

@Component({
  selector: 'app-adm-login',
  templateUrl: './adm-login.component.html',
  styleUrls: ['./adm-login.component.scss'],
  providers: [ SignInPresenter ]
})
export class AdmLoginComponent implements OnInit {
  showPassword = false;
  year: number;

  constructor(public presenter: SignInPresenter) {
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
  }
}
