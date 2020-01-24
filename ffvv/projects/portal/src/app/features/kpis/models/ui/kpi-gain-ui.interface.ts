import { SessionService } from '@portal/core/services';
import { removeCharacter } from '@portal/core/utils';

export interface IKpiGainUI {
  campaign?: string;
  charge: number;
  total_gain: number;
  total_projected_gain;
  total_orders: number;
  total_concourse: number;
  high_value_orders: number;
  low_value_orders: number;
  capitalization: number;
  i6d6: number;
  products_release: number;
  new_fixed: number;
  change_level: number;
}

export interface IGainGZRecoveryUI {
  campaign?: string;
  recovery_percent: number;
  billing: number;
  recovery: number;
  activateDays31: boolean;
}

export class GainGZRecoveryUI implements IGainGZRecoveryUI {
  campaign?: string;
  recovery_percent: number;
  billing: number;
  recovery: number;
  activateDays31: boolean;
  constructor (sessionService: SessionService) {
    const currentCampaign = sessionService.getCampaign();
    this.campaign = removeCharacter(currentCampaign.previous_campaign_short, '-');
    this.recovery_percent = 0;
    this.billing = 0;
    this.recovery = 0;
    this.activateDays31 = false;
  }
}

export interface IGainGZConsolidatedUI {
  section: string;
  recovery_percent: number;
  billing: number;
  recovery: number;
}

export class GainGZConsolidatedUI implements IGainGZConsolidatedUI {
  section: string;
  recovery_percent: number;
  billing: number;
  recovery: number;
  constructor() {
    this.section = '';
    this.recovery_percent = 0;
    this.billing = 0;
    this.recovery = 0;
  }
}
