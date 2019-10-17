import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {InstructorsService} from './instructors.service';
import {WorkshopsService} from './workshops.service';
import {WkmgServicesModule} from '@wkmg/commons/services';

@NgModule({
  imports: [
    WkmgServicesModule,
    HttpClientModule,
  ],
  providers: [InstructorsService, WorkshopsService]
})
export class WkmgHttpModule { }
