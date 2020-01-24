import { Injectable } from '@angular/core';
import {EPhase} from '@portal/core/constants';
import {SessionService} from './session.service';

@Injectable()
export class BusinessService {

  constructor(private sessionService: SessionService) { }

  get isSale() {
    const campaign = this.sessionService.getCampaign();
    return campaign.phase === EPhase.SALE || campaign.billing_start_flag;
  }

  isBrightRoad(flagGZ: boolean, levelCode?: string, codZone?: string): boolean {
    if (flagGZ) {
      return this.isBrightMethod(levelCode, codZone);
    } else {
      const profile = this.sessionService.getProfile();
      return this.isBrightMethod(profile.level_code, profile.cod_zone);
    }
  }

  isBrightMethod(levelCode: string, codZone: string): boolean {
    const configuration = this.sessionService.getConfiguration();
    const isLevelPdV = configuration.level_code.some(x => x.level_code === levelCode && x.active);
    const isZonePdV = configuration.zonePdV.some(x => x.code_zone === codZone && x.flag_pdv);
    return configuration.flag_pdv && isLevelPdV && (configuration.zonePdV.length === 0 || (configuration.zonePdV.length > 0 && isZonePdV));
  }
}
