import { IProfile, ICampaign } from "@portal/core/models";

export interface IUneteRequest {
  country: string;
  region: string;
  zone: string;
  show_section: boolean;
}

export class UneteRequest {
  request: IUneteRequest;

  constructor() {}

  getUneteRequest(profile: IProfile, showDetails: boolean) {
    this.request = {
      country: profile.cod_country,
      region: profile.cod_region,
      zone: profile.cod_zone,
      show_section: showDetails
    };
    return this.request;
  }
}
