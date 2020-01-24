export interface ISalesOrdersRequest {
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
