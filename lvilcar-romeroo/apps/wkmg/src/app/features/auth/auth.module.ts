import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import {AuthMaterialModule} from './auth-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthCommonsModule} from './commons/commons.module';
import {WkmgCommonsModule} from '@wkmg/commons';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthMaterialModule,
    ReactiveFormsModule,
    AuthCommonsModule,
    WkmgCommonsModule,
    TranslateModule.forChild()
  ],
})
export class AuthModule { }
