export interface ICampaign {
  current_campaign: string;
  previous_campaign: string;
  current_campaign_short: string;
  current_campaign_previous: string;
  previous_campaign_short: string;
  phase: string;
  campaign_start_date: string;
  campaign_end_date: string;
  billing_start_date: string;
  billing_start_flag: boolean;
  billing_days: number;
  billing_day: number;
  last_billed_campaign: string;
}

export class CampaignModel implements ICampaign {

  current_campaign: string;
  previous_campaign: string;
  current_campaign_short: string;
  current_campaign_previous: string;
  previous_campaign_short: string;
  phase: string;
  campaign_start_date: string;
  campaign_end_date: string;
  billing_start_date: string;
  billing_start_flag: boolean;
  billing_days: number;
  billing_day: number;
  last_billed_campaign: string;

  constructor(campaign: ICampaign) {
    this.current_campaign = campaign.current_campaign;
    this.previous_campaign = campaign.previous_campaign;
    this.current_campaign_short = campaign.current_campaign_short;
    this.previous_campaign_short = campaign.previous_campaign_short;
    this.phase = campaign.phase;
    this.campaign_start_date = campaign.campaign_start_date;
    this.campaign_end_date = campaign.campaign_end_date;
    this.billing_start_date = campaign.billing_start_date;
    this.billing_start_flag = campaign.billing_start_flag;
    this.billing_days = campaign.billing_days;
    this.billing_day = campaign.billing_day;
    this.last_billed_campaign = campaign.last_billed_campaign;
  }

  isSale() {
    if (this.phase === 'V') {
      return true;
    } else {
      return false;
    }
  }
}

