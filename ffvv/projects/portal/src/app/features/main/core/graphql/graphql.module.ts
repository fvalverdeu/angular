import { NgModule } from "@angular/core";
import { Apollo, ApolloModule } from "apollo-angular";
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpClientModule } from "@angular/common/http";
import { SalesService } from "./sales.service";
import { environment } from "projects/portal/src/environments/environment";
import { RetentionService } from "./retention.service";
import { GainService } from "./gain.service";
import { UneteService } from "./unete.service";

@NgModule({
  imports: [HttpClientModule, ApolloModule, HttpLinkModule],
  providers: [SalesService, RetentionService, GainService, UneteService]
})
export class GraphqlModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: environment.ENDPOINTS.GRAPH_KPI }),
      cache: new InMemoryCache()
    });
    /*apollo.create({
      link: httpLink.create({ uri: environment.ENDPOINTS.GRAPH_BASIC }),
      cache: new InMemoryCache()
    }, 'basic');*/
  }
}
