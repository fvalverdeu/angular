import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {environment} from '../../../../../environments/environment';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {GainService} from './gain.service';
import { RetentionService } from './retention.service';
import { SalesService } from './sales.service';

@NgModule({
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
    GainService,
    RetentionService,
    SalesService
  ]
})
export class GraphqlModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri: environment.ENDPOINTS.GRAPH_KPI }),
      cache: new InMemoryCache()
    });
  }
}
