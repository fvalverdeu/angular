import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { IGainRequest } from '../../../../../models/request/gain-request.interface';
import {SessionService, EventService, BusinessService} from '@portal/core/services';
import {removeCharacter} from '@portal/core/utils';
import { UserRolEnum } from '@portal/core/constants';
import { GainService } from '../../../../graphql/gain.service';
import { IGain } from '../../../../../models/response/gain-response.interface';
import { IGainUI, GainUI } from '../../../../../models/ui/gain-ui.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gain-se',
  templateUrl: './gain-se.component.html',
  styleUrls: ['./gain-se.component.scss']
})
export class GainSeComponent implements OnInit, OnChanges {
  @Input() sectionCode: string;
  thirdPerson: boolean;
  // profile: IProfile;
  // campaignUser: ICampaign;
  dataGain: IGain = {
    campaign: '0',
    profile: '0',
    region: '0',
    zone: '0',
    section: '0',
    sale: '0',
    charge: '0',
    amount_recover: '0',
    days31: { charge: '0', sale: '0', amount_recover: '0'},
    total_gain: '0',
    total_orders: '0',
    capitalization: '0',
    new_fixed: '0',
    i6d6: '0',
    change_level: '0',
    products_release: '0',
    high_value_orders: '0',
    low_value_orders: '0'
  };
  dataGainUI: IGainUI = {
    previousCampaign: '',
    projectedGain: '0',
    recovery: '0'
  };
  // campaign: ICampaign;
  currencySymbol: string;
  size: string;
  title: string;
  color: string;
  // sale: boolean;

  constructor(
    private gainService: GainService,
    private sessionService: SessionService,
    // private campaignService: CampaignService,
    private eventService: EventService,
    private businessService: BusinessService,
    private router: Router
  ) {
    this.thirdPerson = false;
    this.title = 'Ganancia y Saldo';
    this.size = 'xmd';
    this.color = '#000000';
    this.currencySymbol = this.sessionService.getConfiguration().currency_symbol;
  }

  get isSale() {
    return this.businessService.isSale;
  }

  ngOnInit() {
    if (this.sectionCode) { this.thirdPerson = true; }
    this.getData();
    // this.profile = this.sessionService.getProfile();
    /*this.campaignService.getCampaign(this.profile).subscribe(res => {
      this.getData(this.profile, res);
    });*/
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.sectionCode.previousValue) {
      this.thirdPerson = true;
      this.getData();
    }
    // this.campaignService.getCampaign(this.profile).subscribe(res => this.getData(this.profile, res));
  }

  getData() {
    /*if (campaign.phase === 'V' || campaign.billing_start_flag) {
      this.sale = true;
    }*/
    const campaign = this.sessionService.getCampaign();
    const profile = this.sessionService.getProfile();

    const request: IGainRequest = {
      country: profile.cod_country,
      campaign: [campaign.previous_campaign],
      profile: UserRolEnum.SOCIA_EMPRESARIA, // profile.cod_role,
      region: profile.cod_region,
      zone: profile.cod_zone,
      section: this.sectionCode ? this.sectionCode : profile.section, // profile.section,
      show_regions: false,
      show_zones: false,
      show_section: false,
    };

    /*if (this.section.length > 0) {
      request.profile = UserRolEnum.SOCIA_EMPRESARIA;
      request.section = this.section;
    }*/

    // console.log(request);
    this.gainService.getKpiGain(request).subscribe(res => {
      console.log(res);
      this.dataGain.charge = res.gain[0].charge ? res.gain[0].charge : '0';
      this.dataGain.sale = res.gain[0].sale ? res.gain[0].sale : '0';
      this.dataGain.campaign = removeCharacter(campaign.current_campaign_short, '-'), // campaign.previous_campaign;
      this.dataGain.capitalization = res.gain[0].capitalization ? res.gain[0].capitalization : '0';
      this.dataGain.new_fixed = res.gain[0].new_fixed ? res.gain[0].new_fixed : '0';
      this.dataGain.i6d6 = res.gain[0].i6d6 ? res.gain[0].i6d6 : '0';
      this.dataGain.change_level = res.gain[0].change_level ? res.gain[0].change_level : '0';
      this.dataGain.products_release = res.gain[0].products_release ? res.gain[0].products_release : '0';
      this.dataGainUI = new GainUI(this.dataGain);
    });
  }

  redirectDetail() {
    if (this.sectionCode) {
      this.router.navigateByUrl('/kpis/gain-gz');
    } else {
      this.router.navigateByUrl('/kpis/gain-se');
    }
  }
}
