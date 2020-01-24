import { Component, OnInit } from '@angular/core';
import { IProfile } from '@portal/core/models';
import { IRetentionRequest } from '../../../../models/request/retention-request.interface';
import { SessionService, BusinessService } from '@portal/core/services';
import { RetentionService } from '../../../graphql/retention.service';
import { IRetentionUI, IRetentionsUI  } from '../../../../models/ui/retention-ui.interface';
import {removeCharacter} from '@portal/core/utils';
import { UserRolEnum} from '@portal/core/constants';

@Component({
  selector: 'app-retention-header',
  templateUrl: './retention-header.component.html',
  styleUrls: ['./retention-header.component.scss']
})
export class RetentionHeaderComponent implements OnInit {
  profile: IProfile;
  campaign: string;
  retentions: string;
  data: boolean;
  previousUI: IRetentionUI = {
    campaign: '',
    i1d1: 0,
    i2d2: 0,
    i3d3: 0,
    i4d4: 0,
    i5d5: 0,
    i6d6: 0,
  };
  currentUI: IRetentionUI = {
    campaign: '',
    i1d1: 0,
    i2d2: 0,
    i3d3: 0,
    i4d4: 0,
    i5d5: 0,
    i6d6: 0,
  };
  previousSEUI: IRetentionUI[];
  currentSEUI: IRetentionUI[];
  previousGZUI: IRetentionUI[];
  currentGZUI: IRetentionUI[];
  prevcurrentSEUI: IRetentionsUI[] = [];

  constructor(
    private sessionService: SessionService,
    private retentionService: RetentionService,
    private businessService: BusinessService,
  ) {
    this.data = true;
    this.profile = this.sessionService.getProfile();
  }

  ngOnInit() {
    if (this.isSE) {
      this.loadHeaderSE();
    } else {
      this.loadHeaderGZ();
    }
  }

  get isSale() {
    return this.businessService.isSale;
  }

  get isSE() {
    const userProfile = this.sessionService.getProfile();
    return userProfile.cod_role === UserRolEnum.SOCIA_EMPRESARIA;
  }

  protected loadHeaderSE() {
    const campaign = this.sessionService.getCampaign();
    const campFilter = this.isSale ? [campaign.previous_campaign] : [campaign.current_campaign, campaign.previous_campaign];
    const req: IRetentionRequest = {
      country: this.profile.cod_country,
      campaign: campFilter,
      profile: this.profile.cod_role,
      region: this.profile.cod_region,
      zone: this.profile.cod_zone,
      section: this.profile.section,
      show_regions: false,
      show_zones: false,
      show_section: false
    };

    this.retentionService.getKpiRetention(req).subscribe(res => {
      if (res.KpisRetention.length > 0) {
        const retentions = res.KpisRetention;
        if (this.isSale) {
          this.previousUI = {
            // campaign: removeCharacter(campaign.current_campaign_short, '-'),
            i1d1: retentions[0].i1d1,
            i2d2: retentions[0].i2d2,
            i3d3: retentions[0].i3d3,
            i4d4: retentions[0].i4d4,
            i5d5: retentions[0].i5d5,
            i6d6: retentions[0].i6d6,
          };
          this.currentUI = {
            campaign: removeCharacter(campaign.current_campaign_short, '-')
          };
        } else {
          const previousCampaign = retentions.filter(x => x.campaign ===  campaign.previous_campaign)[0];
          const currentCampaign = retentions.filter(x => x.campaign === campaign.current_campaign)[0];
          this.previousUI = {
            // campaign: removeCharacter(campaign.previous_campaign_short, '-'),
            i1d1: previousCampaign.i1d1,
            i2d2: previousCampaign.i2d2,
            i3d3: previousCampaign.i3d3,
            i4d4: previousCampaign.i4d4,
            i5d5: previousCampaign.i5d5,
            i6d6: previousCampaign.i6d6,
          };

          this.currentUI = {
            campaign: removeCharacter(campaign.current_campaign_short, '-'),
            i1d1: currentCampaign.i1d1,
            i2d2: currentCampaign.i2d2,
            i3d3: currentCampaign.i3d3,
            i4d4: currentCampaign.i4d4,
            i5d5: currentCampaign.i5d5,
            i6d6: currentCampaign.i6d6,
          };
        }
        this.data = true;
      }
    });
  }



  protected loadHeaderGZ() {

    const campaign = this.sessionService.getCampaign();
    const campFilter = this.isSale ? [campaign.previous_campaign] : [campaign.current_campaign, campaign.previous_campaign];
    const req: IRetentionRequest = {
      country: this.profile.cod_country,
      campaign: campFilter,
      profile: this.profile.cod_role,
      region: this.profile.cod_region,
      zone: this.profile.cod_zone,
      section: this.profile.section,
      show_regions: false,
      show_zones: false,
      show_section: true
    };

    this.retentionService.getKpiRetention(req).subscribe(res => {
      if (res.KpisRetention.length > 0) {
        if (this.isSale) {
          const retentionsGZ = res.KpisRetention.filter(x => x.profile === UserRolEnum.GERENTE_ZONA)[0];
          this.previousSEUI = res.KpisRetention.filter(x => x.profile === UserRolEnum.SOCIA_EMPRESARIA);
          this.previousUI = {
            i1d1: retentionsGZ.i1d1,
            i2d2: retentionsGZ.i2d2,
            i3d3: retentionsGZ.i3d3,
            i4d4: retentionsGZ.i4d4,
            i5d5: retentionsGZ.i5d5,
            i6d6: retentionsGZ.i6d6
          };
          this.currentUI = {
            campaign: removeCharacter(campaign.current_campaign_short, '-')
          };
        } else {
          const retCurrentGZ = res.KpisRetention.filter(x => x.campaign === campaign.current_campaign
          && x.profile === UserRolEnum.GERENTE_ZONA)[0];
          const retPreviousGZ = res.KpisRetention.filter(x => x.campaign === campaign.previous_campaign
          && x.profile === UserRolEnum.GERENTE_ZONA)[0];
          this.previousSEUI = res.KpisRetention.filter(x => x.campaign === campaign.previous_campaign
          && x.profile === UserRolEnum.SOCIA_EMPRESARIA);
          this.currentSEUI = res.KpisRetention.filter(x => x.campaign === campaign.current_campaign
          && x.profile === UserRolEnum.SOCIA_EMPRESARIA);

          this.currentUI = {
            i1d1: retCurrentGZ.i1d1,
            i2d2: retCurrentGZ.i2d2,
            i3d3: retCurrentGZ.i3d3,
            i4d4: retCurrentGZ.i4d4,
            i5d5: retCurrentGZ.i5d5,
            i6d6: retCurrentGZ.i6d6
          };
          this.previousUI = {
            i1d1: retPreviousGZ.i1d1,
            i2d2: retPreviousGZ.i2d2,
            i3d3: retPreviousGZ.i3d3,
            i4d4: retPreviousGZ.i4d4,
            i5d5: retPreviousGZ.i5d5,
            i6d6: retPreviousGZ.i6d6
          };

          for(let i = 0; i < this.currentSEUI.length; i++) {
            const prev = this.previousSEUI.filter(x => x.section === this.currentSEUI[i].section)[0];
            if (prev) {
              const obj: IRetentionsUI = {
                section: this.currentSEUI[i].section,
                i2d2: this.currentSEUI[i].i2d2 + ' de ' + prev.i1d1,
                i3d3: this.currentSEUI[i].i3d3 + ' de ' + prev.i2d2,
                i4d4: this.currentSEUI[i].i4d4 + ' de ' + prev.i3d3,
                i5d5: this.currentSEUI[i].i5d5 + ' de ' + prev.i4d4,
                i6d6: this.currentSEUI[i].i6d6 + ' de ' + prev.i5d5
              };
              this.prevcurrentSEUI.push(obj);
            }
          }
        }
        this.data = true;
      }
    });












  }



}
