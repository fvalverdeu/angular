import { IProfile, ICampaign } from '@portal/core/models';

export interface ISalesRequest {
  country: string;
  campaign: Array<string>;
  profile: string;
  region: string;
  zone: string;
  section: string;
  show_regions: boolean;
  show_zones: boolean;
  show_section: boolean;
}

export class SalesRequest implements ISalesRequest {
  country: string;
  campaign: Array<string>;
  profile: string;
  region: string;
  zone: string;
  section: string;
  show_regions: boolean;
  show_zones: boolean;
  show_section: boolean;

  constructor(profile: IProfile, campaign: ICampaign, regions: boolean, zones: boolean, section: boolean) {
    this.country = profile.cod_country,
    this.campaign = [campaign.current_campaign, campaign.previous_campaign],
    this.profile = profile.cod_role,
    this.region = profile.cod_region,
    this.zone = profile.cod_zone,
    this.section = profile.section,
    this.show_regions = regions,
    this.show_zones = zones,
    this.show_section = section;
  }
}
