import { NgModule } from '@angular/core';
import {WkmgServicesModule} from '@wkmg/commons/services';
import {WkmgHttpModule} from '@wkmg/commons/http';
import {WkmgInterceptorsModule} from '@wkmg/commons/interceptors';
import {WkmgGuardsModule} from '@wkmg/commons/guards';

const MODULES = [
  WkmgServicesModule,
  WkmgGuardsModule,
  WkmgHttpModule,
  WkmgInterceptorsModule,
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class WkmgCommonsModule { }
