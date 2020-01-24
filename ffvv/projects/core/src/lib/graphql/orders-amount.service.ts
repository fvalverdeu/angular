import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import {Apollo} from 'apollo-angular';
import {IOrdersAmountRequest, IOrdersAmountResponse} from '@portal/core/models';

@Injectable()
export class OrdersAmountService {

  constructor(private apollo: Apollo) { }

  public getOrdersAmount = (request: IOrdersAmountRequest) => {
    const QUERY = gql`
      query OrdersAmount($CampaignUA: CampaignUA){
       OrdersAmount(input: $CampaignUA){
          consultantId
          amount
       }
      }
    `;
    const VARIABLES = {
      CampaignUA: { ...request }
    };
    return this.apollo
      .use('basic')
      .watchQuery<IOrdersAmountResponse>({
        query: QUERY,
        variables: VARIABLES,
        fetchPolicy: 'network-only'
      }).valueChanges.pipe(map((res) => res.data));
  }
}
