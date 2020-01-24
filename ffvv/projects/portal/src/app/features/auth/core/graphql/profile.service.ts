import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {HttpLink} from 'apollo-angular-link-http';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import {UserModel} from '@portal/core/models';

@Injectable()
export class ProfileService {

  constructor(
    private apollo: Apollo,
    httpLink: HttpLink
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

    /*this.apollo.query({
      query: this.QUERY,
      variables: this.VARIABLES,
      fetchPolicy: 'network-only'
    }).subscribe(result => {
      this.owners = result.data as OwnerType[];
      console.log(this.owners);
    });*/
  }

  // public getProfileByUA(userModel: UserModel) {

  //   console.log(userModel);
  //   const getParameters = gql`
  //     query option($params: Parametersua){
  //       ProfileByUA(input: $params){
  //         cod_user
  //         cod_consultant
  //         fullname
  //         names
  //         firstName
  //         lastName
  //         cod_country
  //         country_name
  //         cod_region
  //         cod_zone
  //         section
  //         cod_role
  //         role
  //         identification_document
  //         level
  //         level_code
  //         cub
  //         landline
  //         cellphoneNumber
  //         email
  //         latitude
  //         longitude
  //         cod_level
  //         id_level
  //         cod_territory
  //       }
  //     }
  //   `;

  //   const getVariables = {
  //     params: {
  //       country: userModel.country,
  //       region: userModel.region,
  //       zone: userModel.zone,
  //       section: userModel.section
  //     }
  //   };

  //   return this.apollo
  //     .use('basic')
  //     .watchQuery({
  //       query: getParameters,
  //       variables: getVariables,
  //       fetchPolicy: 'network-only'
  //     })
  //     .valueChanges.pipe(map((result: any) => result.data.ProfileByUA));
  // }
}
