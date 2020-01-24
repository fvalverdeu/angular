import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import {GraphqlModule} from './graphql/graphql.module';
import {PortalInterceptorsModule} from '@portal/core/interceptors';
import { PortalGraphqlModule } from '@portal/core/graphql';

const MODULES = [
  ComponentsModule,
  GraphqlModule,
  PortalInterceptorsModule,
  PortalGraphqlModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class KpisCoreModule { }
