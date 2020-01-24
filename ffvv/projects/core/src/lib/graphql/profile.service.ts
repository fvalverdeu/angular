import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import {UserModel, IProfileUAResponse} from '@portal/core/models';

@Injectable()
export class ProfileService {
  constructor(
    private apollo: Apollo
  ) {}

  public getProfile = (user: UserModel) => {
    const QUERY = gql`
      query option($params: Parameters){
        ProfileByUserName(input: $params){
          cod_user
          cod_consultant
          fullname
          names
          firstName
          lastName
          cod_country
          country_name
          cod_region
          cod_zone
          section
          cod_role
          role
          identification_document
          level
          level_code
          cub
          landline
          cellphoneNumber
          email
          latitude
          longitude
          cod_level
          id_level
          cod_territory
        }
      }
    `;
    const VARIABLES = {
      params: { ...user }
    };
    return this.apollo
      .watchQuery({
        query: QUERY,
        variables: VARIABLES,
        fetchPolicy: 'network-only'
      })
      .valueChanges.pipe(map(({data}: any) => data.ProfileByUserName[0]));
  }

  public getProfileByUA(userModel: UserModel) {
    const getParameters = gql`
      query option($params: Parametersua){
        ProfileByUA(input: $params){
          cod_user
          cod_consultant
          fullname
          names
          firstName
          lastName
          cod_country
          country_name
          cod_region
          cod_zone
          section
          cod_role
          role
          identification_document
          level
          level_code
          cub
          landline
          cellphoneNumber
          email
          latitude
          longitude
          cod_level
          id_level
          cod_territory
        }
      }
    `;

    const getVariables = {
      params: {
        country: userModel.country,
        region: userModel.region,
        zone: userModel.zone,
        section: userModel.section
      }
    };

    return this.apollo
      .use('basic')
      .watchQuery<IProfileUAResponse>({
        query: getParameters,
        variables: getVariables,
        fetchPolicy: 'network-only'
      })
      .valueChanges.pipe(map((res) => res.data));
  }
}
