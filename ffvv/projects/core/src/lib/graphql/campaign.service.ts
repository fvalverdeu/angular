import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {HttpLink} from 'apollo-angular-link-http';
import {IProfile} from '@portal/core/models';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';

@Injectable()
export class CampaignService {

  constructor(
    private apollo: Apollo,
    httpLink: HttpLink
  ) { }

  public getCampaign = (profile: IProfile) => {
    const QUERY = gql`
      query currentCampaign($UA: UA) {
        CurrentCampaign(input: $UA) {
          current_campaign
          previous_campaign
          current_campaign_short
          previous_campaign_short
          phase
          campaign_start_date
          campaign_end_date
          billing_start_date
          billing_start_flag
          billing_days
          billing_day
          last_billed_campaign
        }
      }
    `;
    const VARIABLES = {
      UA: {
        country: profile.cod_country,
        codeRegion: profile.cod_region,
        codeZone: profile.cod_zone,
        codeRole: profile.cod_role
      }
    };
    return this.apollo
      .use('basic')
      .watchQuery({
        query: QUERY,
        variables: VARIABLES,
        fetchPolicy: 'network-only'
      })
      .valueChanges.pipe(map(({data}: any) => data.CurrentCampaign));
  }
}
