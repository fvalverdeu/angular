import {Days, IGain} from '../response/gain-response.interface';

export interface IGainUI {
  previousCampaign: string;
  projectedGain: string;
  recovery: string;
}

export class GainUI implements IGainUI {
  previousCampaign: string;
  projectedGain: string;
  recovery: string;
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

  constructor(data?: IGain) {
    this.campaign = data && data.campaign || null;
    this.profile = data && data.profile || null;
    this.region = data && data.region || null;
    this.zone = data && data.zone || null;
    this.section = data && data.section || null;
    this.sale = data && data.sale || null;
    this.charge = data && data.charge || null;
    this.amount_recover  = data && data.amount_recover  || null;
    this.days31  = data && data.days31  || null;
    this.total_gain = data && data.total_gain || null;
    this.total_orders = data && data.total_orders || null;
    this.capitalization = data && data.capitalization || null;
    this.new_fixed = data && data.new_fixed || null;
    this.i6d6 = data && data.i6d6 || null;
    this.change_level = data && data.change_level || null;
    this.products_release = data && data.products_release || null;
    this.high_value_orders = data && data.high_value_orders || null;
    this.low_value_orders = data && data.low_value_orders || null;
    // tslint:disable-next-line:max-line-length
    const totalConcourse = Number(this.capitalization) + Number(this.new_fixed) + Number(this.i6d6) + Number(this.change_level) + Number(this.products_release);
    const totalOrders = Number(this.total_orders);
    this.projectedGain = (totalOrders + totalConcourse).toString();
    this.recovery = this.charge;
    this.previousCampaign = data.campaign;
  }
}
