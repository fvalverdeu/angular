import { NgModule } from '@angular/core';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { environment } from 'projects/portal/src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import {ConsultantService} from './consultant.service';
import {CampaignService} from './campaign.service';
import {OrdersAmountService} from './orders-amount.service';
import {ProfileService} from './profile.service';

@NgModule({
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
    CampaignService,
    ConsultantService,
    OrdersAmountService,
    ProfileService
  ]
})
export class PortalGraphqlModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri: environment.ENDPOINTS.GRAPH_BASIC }),
      cache: new InMemoryCache()
    }, 'basic');
  }
}
