import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ISalesRequest } from '../../models/request/sales-request.interface';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { ISalesResponse } from '../../models/response/sales-response.interface';

@Injectable()
export class SalesService {

  constructor(private apollo: Apollo) { }

  public getKpiSales = (request: ISalesRequest) => {
    const QUERY = gql`
      query Kpi_sale_order($params2: Params2){
        KpiSalesOrders(input: $params2){
          campaign
          region
          zone
          section
          profile
          sales{
            net_sale
            net_sale_goal
            catalog_sale
            catalog_sale_goal
            fulfillments_vs_sales
            fulfillments_vs_catalogsales
          }
          orders{
            orders
            orders_goal
            high_value_orders
            low_value_orders
            orders_average
            orders_average_goal
            fulfillments_vs_ordersobjective
            fulfillments_vs_ordersaverage
          }
          capitalization{
            capitalization
            incomes
            reentries
            expenses
          }
          activity{
            activity_percentage
            initials_active
            finals_active
            finals_active_lastyear
            percentage_actives_retention
          }
          pegs{
            pegs
            retention_percentage_pegs
            pegs_to_retain
            pegs_retention
          }
        }
      }
    `;

    const VARIABLES = {
      params2: { ...request }
    };
    return this.apollo.watchQuery<ISalesResponse>({
      query: QUERY,
      variables: VARIABLES,
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(map((res) => res.data));
  }
}
