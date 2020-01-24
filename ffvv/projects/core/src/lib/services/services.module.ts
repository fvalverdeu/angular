import { NgModule } from '@angular/core';
import {CryptoService} from './crypto.service';
import {SessionService} from './session.service';
import {BusinessService} from './business.service';
import {EventService} from './event.service';

@NgModule({
  providers: [
    CryptoService,
    SessionService,
    BusinessService,
    EventService
  ]
})
export class PortalServicesModule { }
