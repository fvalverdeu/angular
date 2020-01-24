import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OauthService } from './oauth.service';
import { AdministrativeUnitService } from './administrative-unit.service';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [ OauthService, AdministrativeUnitService ]
})
export class PortalRestModule { }
