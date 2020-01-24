import { IProfile, ICampaign } from '@portal/core/models';

export interface IRetentionRequest {
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

export class RetentionRequest {
  request: IRetentionRequest;

  constructor() {}

  getRetentionSERequest(
    profile: IProfile,
    arrayCampaign: Array<string>,
    showRegions: boolean,
    showZones: boolean,
    showSections: boolean
  ) {
    // Para pruebas: Se toma como campaña actual la 201917 porque es donde se tiene data.
    // En venta se consulta: campaña anterior (201916).
    // En facturación se consulta: campaña actual (201917) vs campaña anterior (201916).
    // campaign.current_campaign = '201917';
    // campaign.previous_campaign = '201916';
    this.request = {
      country: profile.cod_country,
      campaign: arrayCampaign,
      profile: profile.cod_role,
      region: profile.cod_region,
      zone: profile.cod_zone,
      section: profile.section,
      show_regions: showRegions,
      show_zones: showZones,
      show_section: showSections
    };
    return this.request;
  }
}
