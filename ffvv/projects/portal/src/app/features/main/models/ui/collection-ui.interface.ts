import { Days } from '../response/gain-response.interface';

export interface ICollectionUI {
  campaign: string;
  profile?: string;
  region?: string;
  zone?: string;
  section?: string;
  sale?: string;
  charge?: string;
  amount_recover?: string;
  days31?: Days;
}
