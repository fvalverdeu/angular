import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { IGainRequest } from '../../models/request/gain-request.interface';
import { IGainResponse } from '../../models/response/gain-response.interface';

@Injectable()
export class GainService {

  constructor(private apollo: Apollo) {}

  public getKpiGain = (request: IGainRequest) => {
    const QUERY = gql`
    query kpi_gain($filter: Filter){
      gain(input: $filter){
         campaign,
         profile,
         region,
         zone,
         section,
         sale,
         charge,
         amount_recover,
         days31{
           amount_recover,
           charge,
           sale
         },
         total_gain,
         total_orders,
         capitalization,
         new_fixed,
         i6d6,
         change_level,
         products_release,
         high_value_orders,
         low_value_orders,
         capitalization,
         i6d6,
         products_release,
         new_fixed,
         change_level
       }
      }
    `;
    const VARIABLES = {
      filter: { ...request }
    };
    return this.apollo
      .watchQuery<IGainResponse>({
        query: QUERY,
        variables: VARIABLES,
        fetchPolicy: 'network-only'
      })
      .valueChanges.pipe(map((response) => response.data));
  }
}
