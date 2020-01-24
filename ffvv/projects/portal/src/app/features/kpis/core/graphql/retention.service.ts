import { Injectable, DebugElement } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import { IRetentionRequest } from '../../models/request/retention-request.interface';
import { IRetentionResponse } from '../../models/response/retention-response.interface';

@Injectable()
export class RetentionService {
  constructor(private apollo: Apollo) {}

  public getKpiRetention = (request: IRetentionRequest) => {
    const QUERY = gql`
      query retention($filterR: FilterR){
        KpisRetention(input: $filterR){
          campaign
          profile
          region
          zone
          section
          i1d1
          i2d2
          i3d3
          i4d4
          i5d5
          i6d6
        }
      }
    `;
    const VARIABLES = {
      filterR: { ...request }
    };
    return this.apollo.watchQuery<IRetentionResponse>({
      query: QUERY,
      variables: VARIABLES,
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(map((res) => res.data));
  }
}
