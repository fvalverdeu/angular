export interface IGain {
  campaign: string;
  profile: string;
  region: string;
  zone: string;
  section: string;
  sale: string;
  charge: string;
  amount_recover: string;
  days31: Days;
  total_gain: string;
  total_orders: string;
  capitalization: string;
  new_fixed: string;
  i6d6: string;
  change_level: string;
  products_release: string;
  high_value_orders: string;
  low_value_orders: string;
}

export interface Days {
  amount_recover: string;
  charge: string;
  sale: string;
}

export interface IGainResponse {
  gain: IGain[];
}
