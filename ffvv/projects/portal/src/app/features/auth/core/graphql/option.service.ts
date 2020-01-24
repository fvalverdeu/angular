import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {HttpLink} from 'apollo-angular-link-http';
import {IProfile} from '@portal/core/models';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';

@Injectable()
export class OptionService {

  constructor(
    private apollo: Apollo,
    httpLink: HttpLink
  ) { }

  public getOptions = (profile: IProfile) => {
    const QUERY = gql`
      query option($params: Params){
        Options(input: $params){
          description
          creation_date
          update_date
          option_type
          role
          active
          sub_option{
            description
            application
            role
            url
          }
        }
      }
    `;
    const VARIABLES = {
      params: {
        country: profile.cod_country,
        role: profile.cod_role,
        application: 'Web'
      }
    };
    return this.apollo
      .watchQuery({
        query: QUERY,
        variables: VARIABLES,
        fetchPolicy: 'network-only'
      })
      .valueChanges.pipe(map(({data}: any) => data.Options));
  }
}
