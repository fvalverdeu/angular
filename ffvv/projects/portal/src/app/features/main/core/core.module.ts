import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { GraphqlModule } from './graphql/graphql.module';
import { PortalRestModule } from '@portal/core/rest';
import { PortalInterceptorsModule } from '@portal/core/interceptors';
import { PortalGraphqlModule } from '@portal/core/graphql';

const MODULES = [
  ComponentsModule,
  GraphqlModule,
  PortalRestModule,
  PortalGraphqlModule,
  PortalInterceptorsModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MainCoreModule { }
