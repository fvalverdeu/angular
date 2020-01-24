import { NgModule } from '@angular/core';
import {PortalServicesModule} from '@portal/core/services';
import {PortalInterceptorsModule} from '@portal/core/interceptors';
import {PortalLogModule} from '@portal/core/log';
import {PortalRestModule} from '@portal/core/rest';
import {PortalGuardsModule} from '@portal/core/guards';
import {PortalComponentsModule} from '@portal/core/components';
import {PortalGraphqlModule} from '@portal/core/graphql';

const MODULES = [
  PortalServicesModule,
  PortalLogModule,
  PortalRestModule,
  PortalGraphqlModule,
  PortalInterceptorsModule,
  PortalGuardsModule,
  PortalComponentsModule,
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class PortalCoreModule { }
