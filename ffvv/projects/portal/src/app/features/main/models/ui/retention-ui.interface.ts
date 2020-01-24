import { IRetention } from '../response/retention-response.interface';
import { ICampaign } from '@portal/core/models';

export interface IRetentionUI {
  campaign: string;
  i1d1: number;
  i2d2: number;
  i3d3: number;
  i4d4: number;
  i5d5: number;
  i6d6: number;
}

export interface IRetentionSaleUI {
  shortCampaign: string;
  posibles6d6: string;
  maxRetention5d5: string;
  maxRetention4d4: string;
  maxRetention3d3: string;
  maxRetention2d2: string;
  maxRetention1d1: string;
}

export interface IRetentionBillingUI {
  previous5d5: string;
  reached6d6: string;
  reached5d5: string;
  reached4d4: string;
  reached3d3: string;
  reached2d2: string;
  reached1d1: string;
  hold5d5: string;
  hold4d4: string;
  hold3d3: string;
  hold2d2: string;
  hold1d1: string;
}

export class RetentionUI {
  saleUI: IRetentionSaleUI;
  billingUI: IRetentionBillingUI;
  campaign: string;
  profile: string;
  region: string;
  zone: string;
  section: string;
  i1d1: string;
  i2d2: string;
  i3d3: string;
  i4d4: string;
  i5d5: string;
  i6d6: string;

  constructor(data?: IRetention) {
    this.campaign = data && data.campaign || null;
    this.profile = data && data.profile || null;
    this.region = data && data.region || null;
    this.zone = data && data.zone || null;
    this.section = data && data.section || null;
    this.i1d1 = data && data.i1d1 || null;
    this.i2d2 = data && data.i2d2 || null;
    this.i3d3  = data && data.i3d3  || null;
    this.i4d4  = data && data.i4d4  || null;
    this.i5d5  = data && data.i5d5  || null;
    this.i6d6  = data && data.i6d6  || null;
  }

  setFormatCx(campaign: string) {
    return campaign = campaign.replace('-', '');
  }

  getRetentionKpiSale(campaign: ICampaign) {
    this.saleUI = {
      shortCampaign: this.setFormatCx(campaign.current_campaign_short),
      posibles6d6: this.i5d5 ? this.i5d5 : '0',
      maxRetention5d5: this.i4d4 ? this.i4d4 : '-',
      maxRetention4d4: this.i3d3 ? this.i3d3 : '-',
      maxRetention3d3: this.i2d2 ? this.i2d2 : '-',
      maxRetention2d2: this.i1d1 ? this.i1d1 : '-',
      maxRetention1d1: '0'
    };
    return this.saleUI;
  }

  getRetentionKpiBilling(dataPrevious: IRetention) {
    dataPrevious.i1d1 = dataPrevious.i1d1 ? dataPrevious.i1d1 : '0';
    dataPrevious.i2d2 = dataPrevious.i2d2 ? dataPrevious.i2d2 : '0';
    dataPrevious.i3d3 = dataPrevious.i3d3 ? dataPrevious.i3d3 : '0';
    dataPrevious.i4d4 = dataPrevious.i4d4 ? dataPrevious.i4d4 : '0';
    dataPrevious.i5d5 = dataPrevious.i5d5 ? dataPrevious.i5d5 : '0';
    dataPrevious.i6d6 = dataPrevious.i6d6 ? dataPrevious.i6d6 : '0';
    this.i1d1 = '0';
    this.billingUI = {
      previous5d5: dataPrevious.i5d5,
      reached6d6: this.i6d6 ? this.i6d6 : '0',
      reached5d5: this.i5d5 ? this.i5d5 : '-',
      reached4d4: this.i4d4 ? this.i4d4 : '-',
      reached3d3: this.i3d3 ? this.i3d3 : '-',
      reached2d2: this.i2d2 ? this.i2d2 : '-',
      reached1d1: this.i1d1 ? this.i1d1 : '-',
      hold5d5: (Number(dataPrevious.i4d4) - Number(this.i5d5)).toString(),
      hold4d4: (Number(dataPrevious.i3d3) - Number(this.i4d4)).toString(),
      hold3d3: (Number(dataPrevious.i2d2) - Number(this.i3d3)).toString(),
      hold2d2: (Number(dataPrevious.i1d1) - Number(this.i2d2)).toString(),
      hold1d1: '0'
    };
    this.billingUI.hold1d1 = this.billingUI.hold1d1 !== '0' ? this.billingUI.hold1d1 : '-';
    this.billingUI.hold2d2 = this.billingUI.hold2d2 !== '0' ? this.billingUI.hold2d2 : '-';
    this.billingUI.hold3d3 = this.billingUI.hold3d3 !== '0' ? this.billingUI.hold3d3 : '-';
    this.billingUI.hold4d4 = this.billingUI.hold4d4 !== '0' ? this.billingUI.hold4d4 : '-';
    this.billingUI.hold5d5 = this.billingUI.hold5d5 !== '0' ? this.billingUI.hold5d5 : '-';
    this.billingUI.reached1d1 = this.billingUI.reached1d1 !== '0' ? this.billingUI.reached1d1 : '-';
    this.billingUI.reached2d2 = this.billingUI.reached2d2 !== '0' ? this.billingUI.reached2d2 : '-';
    this.billingUI.reached3d3 = this.billingUI.reached3d3 !== '0' ? this.billingUI.reached3d3 : '-';
    this.billingUI.reached4d4 = this.billingUI.reached4d4 !== '0' ? this.billingUI.reached4d4 : '-';
    this.billingUI.reached5d5 = this.billingUI.reached5d5 !== '0' ? this.billingUI.reached5d5 : '-';
    //this.billingUI.reached6d6 = this.billingUI.reached6d6 !== '0' ? this.billingUI.reached6d6 : '-';
    return this.billingUI;
  }

}
