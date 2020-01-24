import { Component, OnInit } from '@angular/core';
import {SessionService, EventService, BusinessService} from '@portal/core/services';
import {removeCharacter} from '@portal/core/utils';
import { IGainRequest } from '../../../../../models/request/gain-request.interface';
import { GainService } from '../../../../graphql/gain.service';
import { ICollectionUI } from '../../../../../models/ui/collection-ui.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gain-gz',
  templateUrl: './gain-gz.component.html',
  styleUrls: ['./gain-gz.component.scss']
})
export class GainGzComponent implements OnInit {
  isGZ: boolean;
  sectionSel: string;
  currencySymbol: string;
  uiPrevious: ICollectionUI;
  data: boolean;
  size: string;
  title: string;
  color: string;

  constructor(
    private sessionService: SessionService,
    private gainService: GainService,
    private eventService: EventService,
    private businessService: BusinessService,
    private router: Router
  ) {
    this.data = false;
    this.isGZ = true;
    this.uiPrevious = {
      campaign: '',
      amount_recover: ''
    };
  }

  get isSale() {
    return this.businessService.isSale;
  }

  ngOnInit() {
    this.title = 'Cobranza';
    this.size = 'xmd';
    this.color = '#000000';
    this.currencySymbol = this.sessionService.getConfiguration().currency_symbol;
    this.load();
    this.eventService.changeSection.subscribe((sectionCode: string) => {
      if (sectionCode) {
        this.isGZ = false;
        this.sectionSel = sectionCode;
      } else {
        this.isGZ = true;
        this.sectionSel = '';
      }
    });
  }

  protected load() {
    const profile = this.sessionService.getProfile();
    const campaign = this.sessionService.getCampaign();

    const campFilter =  [campaign.previous_campaign];
    const req: IGainRequest = {
      country: profile.cod_country,
      campaign: campFilter,
      profile: profile.cod_role,
      region:  profile.cod_region,
      zone: profile.cod_zone,
      section: profile.section,
      show_regions: false,
      show_zones: false,
      show_section: false
    };

    this.gainService.getKpiGain(req).subscribe(res => {
      const previousCampaign = res.gain.filter(x => x.campaign === campaign.previous_campaign)[0];
      this.uiPrevious = {
        campaign: removeCharacter(campaign.previous_campaign_short, '-'),
        charge: previousCampaign.charge
      };
      this.data = true;
    });
  }

  redirectDetail() {
    this.router.navigateByUrl('/kpis/gain-gz');
  }
}
