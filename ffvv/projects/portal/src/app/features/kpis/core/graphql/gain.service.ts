import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import {IKpiGainResponse, IGainGZResponse} from '../../models/response/kpi-gain-response.interface';
import {IKpiGainRequest} from '../../models/request/kpi-gain-request.interface';

@Injectable()
export class GainService {
  constructor(private apollo: Apollo) {}

  public getKpiGain = (request: IKpiGainRequest) => {
    const QUERY = gql`
      query kpi_gain($filter: Filter){
        gain(input: $filter){
          campaign,
          profile,
          region,
          zone,
          section,
          charge,
          total_gain,
          total_orders,
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
    return this.apollo.watchQuery<IKpiGainResponse>({
      query: QUERY,
      variables: VARIABLES,
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(map((res) => res.data));
  }

  public getKpiGainGZ = (request: IKpiGainRequest) => {
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
          days31 {charge, sale, amount_recover },
          total_gain,
          total_orders,
          capitalization,
          new_fixed,
          i6d6,
          change_level,
          products_release,
          high_value_orders,
          low_value_orders
        }
      }
    `;
    const VARIABLES = {
      filter: { ...request }
    };
    return this.apollo.watchQuery<IGainGZResponse>({
      query: QUERY,
      variables: VARIABLES,
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(map((res) => res.data));
  }
}
