import { NgModule } from '@angular/core';
import {HttpModule} from './http/http.module';
import {GraphqlModule} from './graphql/graphql.module';
import {PortalGraphqlModule} from '@portal/core/graphql';

const MODULES = [
  HttpModule,
  GraphqlModule
];

@NgModule({
  imports: [... MODULES],
  exports: [... MODULES]
})
export class AuthCoreModule { }
