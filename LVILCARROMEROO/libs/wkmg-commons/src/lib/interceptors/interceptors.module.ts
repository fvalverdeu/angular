import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpHandlerInterceptor} from './http-handler.interceptor';
import {WkmgServicesModule} from '@wkmg/commons/services';

@NgModule({
  imports: [
    WkmgServicesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHandlerInterceptor,
      multi: true
    },
  ]
})
export class WkmgInterceptorsModule { }
