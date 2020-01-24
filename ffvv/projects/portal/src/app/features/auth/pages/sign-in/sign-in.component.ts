import { Component, OnInit } from '@angular/core';
import { SignInPresenter } from '../sign-in.presenter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [ './sign-in.component.scss' ],
  providers: [ SignInPresenter ]
})
export class SignInComponent implements OnInit {
  showPassword: boolean;
  external: boolean;
  year: number;

  constructor(
    public presenter: SignInPresenter,
    private route: ActivatedRoute
  ) {
    this.year = new Date().getFullYear();
    this.showPassword = false;
    this.external = false;
  }

  ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');
    if (token) {
      this.external = true
      this.presenter.signInExternal(token);
    }
  }
}
