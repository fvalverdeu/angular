export interface IKpiGainResponse {
  gain: IKpiGain[];
}
export interface IKpiGain {
  campaign: string;
  profile: string;
  region: string;
  zone: string;
  section: string;
  charge?: number;
  total_gain: number;
  total_orders: number;
  capitalization: number;
  new_fixed: number;
  i6d6: number;
  change_level: number;
  products_release: number;
  high_value_orders: number;
  low_value_orders: number;
}

export interface IGainGZResponse {
  gain: IGainGZ[];
}
export interface IGainGZ {
  campaign: string;
  profile: string;
  region: string;
  zone: string;
  section: string;
  sale: number;
  charge: number;
  amount_recover: number;
  days31: Days31;
  total_gain: number;
  total_orders: number;
  capitalization: number;
  new_fixed: number;
  i6d6: number;
  change_level: number;
  products_release: number;
  high_value_orders: number;
  low_value_orders: number;
}

export interface Days31 {
  charge: number;
  sale: number;
  amount_recover: number;
}
