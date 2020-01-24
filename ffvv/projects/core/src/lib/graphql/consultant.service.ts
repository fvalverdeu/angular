import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import {IConsultantRequest} from '../models/request/consultant-request.interface';
import {IConsultantResponse} from '../models/response/consultant-response.interface';

@Injectable()
export class ConsultantService {

  constructor(private apollo: Apollo) {}

  public getConsultants = (request: IConsultantRequest) => {
    const QUERY = gql`
      query consultant($filters: Filters){
        Consultants(input: $filters){
          campaign,
          region,
          zone,
          section,
          id,
          name,
          code,
          address,
          phone,
          is_peg,
          is_new,
          code_segment_short,
          segment_description,
          constancy_new,
          bright_segment_code,
          bright_segment_description,
          birthday,
          admission_campaign,
          last_order_campaign,
          first_order_campaign,
          pending_debt,
          sale_period,
          document_number,
          possibles_constancy,
          has_billed_order,
          state_code,
          state_description
       }
      }
    `;
    const VARIABLES = {
      filters: { ...request }
    };
    return this.apollo
      .use('basic')
      .watchQuery<IConsultantResponse>({
        query: QUERY,
        variables: VARIABLES,
        fetchPolicy: 'network-only'
      }).valueChanges.pipe(map((res) => res.data));
  }
}
