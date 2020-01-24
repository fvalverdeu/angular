import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {HttpLink} from 'apollo-angular-link-http';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';

@Injectable()
export class ConfigurationService {

  constructor(
    private apollo: Apollo,
    httpLink: HttpLink
  ) {}

  public getConfiguration = (country: string) => {
    const QUERY = gql`
      query configuration($Country: Country){
        Configuration(input: $Country){
          currency_symbol,
          phone_code,
          flag_pdv,
          zonePdV {
            code_region
            code_zone
            flag_pdv
            flag_datareport
          }
          level_code{
            level_code
            description
            active
          }
        }
      }
    `;
    const VARIABLES = {
      Country: { country }
    };
    return this.apollo
      .watchQuery({
        query: QUERY,
        variables: VARIABLES,
        fetchPolicy: 'network-only'
      })
      .valueChanges.pipe(map(({data}: any) => data.Configuration));
  }
}
