import { UserModel } from './user.model';
import { CampaignModel } from './campaign.model';

export interface ISelectedProfile {
  codprofile: string;
  codiso: string;
  codregion: string;
  codzone: string;
  codsection: string;
  phase: string;
  currentCampaign: string;
  ABValue: string;
  responsableRegion: string;
  responsableZone: string;
  responsableSection: string;
  currentLevel: string;
  period: string;
  ranking: string;
  userModel: UserModel;
  campaignModel: CampaignModel;
}

export class SelectedProfileModel {

  codprofile: string;
  codiso: string;
  codregion: string;
  codzone: string;
  codsection: string;
  phase: string;
  currentCampaign: string;
  ABValue: string;
  responsableRegion: string;
  responsableZone: string;
  responsableSection: string;
  currentLevel: string;
  period: string;
  ranking: string;
  userModel: UserModel;
  campaignModel: CampaignModel;

  constructor(umArgs: ISelectedProfile) {
    for (const key of Object.keys(umArgs)) {
      if (key === 'userModel') {
        for (const userKey of Object.keys(umArgs['userModel'])) {
          this[key][userKey] = umArgs['userModel'][userKey];
        }
      } else if (key === 'campaignModel') {
        for (const campKey of Object.keys(umArgs['campaignModel'])) {
          this[key][campKey] = umArgs['campaignModel'][campKey];
        }
      } else {
        this[key] = umArgs[key];
      }
    }
  }
}

export class SelectedProfile {
  codprofile: string;
  codiso: string;
  codregion: string;
  codzone: string;
  codsection: string;
  phase: string;
  currentCampaign: string;
  ABValue: string;
  responsableRegion: string;
  responsableZone: string;
  responsableSection: string;
  currentLevel: string;
  period: string;
  ranking: string;
  userModel: UserModel;
  campaignModel: CampaignModel;

  constructor(profile: string, iso: string, region: string, zone: string, user: UserModel, campaign: CampaignModel) {
    this.codprofile = profile;
    this.codiso = iso;
    this.codregion = region;
    this.codzone = zone;
    this.userModel = user;
    this.campaignModel = campaign;

    this.codsection = null;
    this.phase = this.campaignModel.phase;
    this.currentCampaign = this.campaignModel.current_campaign;
    this.ranking = 'Not available';
    this.ABValue = null;
    this.responsableRegion = null;
    this.responsableZone = null;
    this.responsableSection = null;

    this.getPeriod();
    this.setUA();
  }

  getPeriod() {
    this.period = (this.phase === 'F') ? 'Facturación' : 'Venta';
  }

  setUA() {
    switch (this.codprofile) {
      case 'DV': {
        this.codregion = null;
        this.currentLevel = 'P';
        break;
      }
      case 'GR': {
        this.codzone = null;
        this.currentLevel = 'R';
        break;
      }
      case 'GZ': {
        this.currentLevel = 'Z';
      }
    }
  }
}
