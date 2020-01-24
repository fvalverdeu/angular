import { Component, OnInit } from '@angular/core';
import { BusinessService, SessionService } from '@portal/core/services';
import { ICampaign } from '@portal/core/models';
import { removeCharacter } from '@portal/core/utils';

@Component({
  selector: 'app-sales-se',
  templateUrl: './sales-se.component.html',
  styleUrls: ['./sales-se.component.scss']
})
export class SalesSeComponent implements OnInit {
  message: string;
  campaign: ICampaign;

  constructor(private businessService: BusinessService, private sessionService: SessionService) { }

  get isSale() {
    return this.businessService.isSale;
  }

  ngOnInit() {
    this.campaign = this.sessionService.getCampaign();
    let campaignShort = '';

    if (this.isSale) {
      campaignShort = removeCharacter(this.campaign.previous_campaign_short, '-');
      this.message = 'Resultados de la sección en ' + campaignShort;
    } else {
      campaignShort = removeCharacter(this.campaign.current_campaign_short, '-');
      this.message = 'Avance de la Sección en ' + campaignShort;
    }
  }
}
