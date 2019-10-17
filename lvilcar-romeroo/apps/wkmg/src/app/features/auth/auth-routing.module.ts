import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {SignInComponent} from './views/sign-in/sign-in.component';
import {SignUpComponent} from './views/sign-up/sign-up.component';

const routes = [
  { path: '', redirectTo: 'sign-in' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule { }
