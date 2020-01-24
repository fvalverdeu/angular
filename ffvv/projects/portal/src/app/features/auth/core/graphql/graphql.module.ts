import { NgModule } from '@angular/core';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpClientModule} from '@angular/common/http';
import {ProfileService} from './profile.service';
import {environment} from '../../../../../environments/environment';
import {OptionService} from './option.service';
import { ConfigurationService } from './configuration.service';

@NgModule({
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
    ProfileService,
    OptionService,
    ConfigurationService
  ]
})
export class GraphqlModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri: environment.ENDPOINTS.GRAPH_BASIC }),
      cache: new InMemoryCache()
    });
  }
}
