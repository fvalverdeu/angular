import { Component, OnInit } from '@angular/core';
import {GainService} from '../../../graphql/gain.service';
import {IKpiGainRequest} from '../../../../models/request/kpi-gain-request.interface';
import {SessionService} from '@portal/core/services';
import {removeCharacter} from '@portal/core/utils';
import { IProfile, ICampaign } from '@portal/core/models';
import { UserRolEnum } from '@portal/core/constants';
import { IKpiGainUI, IGainGZRecoveryUI, IGainGZConsolidatedUI, GainGZRecoveryUI, GainGZConsolidatedUI } from '../../../../models/ui/kpi-gain-ui.interface';
import { IGainGZ } from '../../../../models/response/kpi-gain-response.interface';

@Component({
  selector: 'app-gain-header',
  templateUrl: './gain-header.component.html',
  styleUrls: ['./gain-header.component.scss']
})
export class GainHeaderComponent implements OnInit {
  currency: string;
  previousUI: IKpiGainUI;
  recoveryUI: IGainGZRecoveryUI;
  consolidatedUI: IGainGZConsolidatedUI[] = [];
  day31: boolean;

  userProfile: IProfile;
  constructor(
    private gainService: GainService,
    private sessionService: SessionService
  ) {
    this.day31 = false;
    this.userProfile = this.sessionService.getProfile();
    const configuration = this.sessionService.getConfiguration();
    this.currency = configuration.currency_symbol;
    this.previousUI = {
      campaign: '',
      charge: 0,
      total_gain: 0,
      total_projected_gain: 0,
      total_orders: 0,
      total_concourse: 0,
      high_value_orders: 0,
      low_value_orders: 0,
      capitalization: 0,
      i6d6: 0,
      products_release: 0,
      new_fixed: 0,
      change_level: 0
    };
    this.recoveryUI = new GainGZRecoveryUI(sessionService);
    //this.consolidatedUI = new GainGZConsolidatedUI();
  }

  get isSE() {
    return this.userProfile.cod_role === UserRolEnum.SOCIA_EMPRESARIA;
  }

  get isGZ() {
    return this.userProfile.cod_role === UserRolEnum.GERENTE_ZONA;
  }

  ngOnInit() {
    this.getDataUI();
  }
  getDataUI() {
    const userCampaign = this.sessionService.getCampaign();
    const request = this.getRequest(userCampaign);
    if (this.isSE) {
      this.setGainSEUI(request, userCampaign);
    } else if (this.isGZ) {
      this.setGainGZUI(request);
    }
  }

  getRequest(userCampaign: ICampaign) {
    const request: IKpiGainRequest = {
      country: this.userProfile.cod_country,
      campaign: [userCampaign.previous_campaign],
      profile: this.userProfile.cod_role,
      region: this.userProfile.cod_region,
      zone: this.userProfile.cod_zone,
      section: this.userProfile.section,
      // country: 'CO',
      // campaign: ['201916'],
      // profile: 'SE',
      // region: '06',
      // zone: '0611',
      // section: 'A',
      show_regions: false,
      show_zones: false,
      show_section: false
    };
    return request;
  }

  setGainSEUI(request: IKpiGainRequest, userCampaign: ICampaign) {
    this.gainService.getKpiGain(request).subscribe(res => {
      const response = res.gain[0];
      this.previousUI.campaign = removeCharacter(userCampaign.previous_campaign_short, '-');
      if (response) {
        // tslint:disable-next-line:max-line-length
        const totalConcourse = (response.capitalization + response.new_fixed + response.i6d6 + response.change_level + response.products_release);
        this.previousUI = {
          campaign: removeCharacter(userCampaign.previous_campaign_short, '-'),
          charge: response.charge ? response.charge : 0,
          total_gain: response.total_gain,
          total_projected_gain: response.total_orders,
          total_orders: response.total_orders + totalConcourse,
          total_concourse: totalConcourse,
          high_value_orders: response.high_value_orders,
          low_value_orders: response.low_value_orders,
          capitalization: response.capitalization,
          i6d6: response.i6d6,
          products_release: response.products_release,
          new_fixed: response.new_fixed,
          change_level: response.change_level
        };
      }
    });
  }

  setGainGZUI(request: IKpiGainRequest) {
    request.show_section = true;
    this.gainService.getKpiGainGZ(request).subscribe(res => {
      let response = res.gain;
      console.log(response);
      if (response) {
        const dataRecovery: IGainGZ = response.filter(x => x.profile === 'GZ')[0];
        this.recoveryUI.recovery_percent = dataRecovery.charge; // Porcentaje de recuperación Cx-1: charge
        this.recoveryUI.billing = dataRecovery.sale; // Facturado Cx-1: sale
        this.recoveryUI.recovery = dataRecovery.amount_recover; // Recuperado Cx-1: amount_recover
        const dataConsolidated: IGainGZ[] = response.filter( x=> x.profile === 'SE');
        if (dataConsolidated) {
          if (this.consolidatedUI.length != 0) {
            this.consolidatedUI.length = 0;
          }
          dataConsolidated.forEach(element => {
            let dataSection = new GainGZConsolidatedUI();
            dataSection.section = element.section; // section
            dataSection.recovery_percent = element.charge; // Porcentaje de recuperación Cx-1: charge
            dataSection.billing = element.sale; // Facturado Cx-1: sale
            dataSection.recovery = element.amount_recover; // Recuperado Cx-1: amount_recover
            this.consolidatedUI.push(dataSection);
          });
        }
      }
    })
  }

  day31Confirmation(confirmation: boolean) {
    this.day31 = confirmation;
    const userCampaign = this.sessionService.getCampaign();
    const request = this.getRequest(userCampaign);
    if (confirmation) {
      request.show_section = true;
      this.gainService.getKpiGainGZ(request).subscribe(res => {
        let response = res.gain;
        console.log(response);
        if (response) {
          const dataConsolidated: IGainGZ[] = response.filter( x=> x.profile === 'SE');
          if (dataConsolidated) {
            if (this.consolidatedUI.length != 0) {
              this.consolidatedUI.length = 0;
            }
            dataConsolidated.forEach(element => {
              let dataSection = new GainGZConsolidatedUI();
              dataSection.section = element.section; // section
              dataSection.recovery_percent = element.days31.charge; // Porcentaje de recuperación Cx-1: charge
              dataSection.billing = element.days31.sale; // Facturado Cx-1: sale
              dataSection.recovery = element.days31.amount_recover; // Recuperado Cx-1: amount_recover
              this.consolidatedUI.push(dataSection);
            });
          }
        }
      })
    } else {
      this.setGainGZUI(request);
    }
  }
}
