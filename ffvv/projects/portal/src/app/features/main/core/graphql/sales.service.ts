import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { ISalesOrdersResponse, ISalesOrders } from '../../models/response/salesorders-response.interface';
import { ISalesOrdersRequest } from '../../models/request/salesorders-request.interface';

@Injectable()
export class SalesService {
  constructor(private apollo: Apollo) {}

  public getSalesOrders = (req: ISalesOrdersRequest) => {
    const QUERY = gql`
      query Kpi_sale_order($params2: Params2) {
        KpiSalesOrders(input: $params2) {
          campaign
          region
          zone
          section
          profile
          sales {
            net_sale
            net_sale_goal
            catalog_sale
            catalog_sale_goal
            fulfillments_vs_catalogsales
          }
          orders {
            orders
            orders_goal
            high_value_orders
            low_value_orders
            orders_average
            fulfillments_vs_ordersobjective
          }
        }
      }
    `;
    const VARIABLES = {
      params2: { ...req }
    };
    return this.apollo.watchQuery<ISalesOrdersResponse>({
      query: QUERY,
      variables: VARIABLES,
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(map((response) => response.data)); // .pipe(map(({ data }: any) => data.KpiSalesOrders));
  }
}
