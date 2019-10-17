import { NgModule } from '@angular/core';
import {HttpModule} from './http/http.module';

const MODULES = [
  HttpModule
];

@NgModule({
  imports: [... MODULES],
  exports: [... MODULES]
})
export class AuthCommonsModule { }
