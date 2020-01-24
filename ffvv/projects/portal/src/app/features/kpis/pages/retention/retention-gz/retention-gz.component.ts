import { Component, OnInit } from '@angular/core';
import { SessionService} from '@portal/core/services';
import {removeCharacter} from '@portal/core/utils';

@Component({
  selector: 'app-retention-gz',
  templateUrl: './retention-gz.component.html',
  styleUrls: ['./retention-gz.component.scss']
})
export class RetentionGzComponent implements OnInit {
  subTitle: string;

  constructor(
    private sessionService: SessionService
    ) {
      const campaign = this.sessionService.getCampaign();
      const campaignShort = removeCharacter(campaign.current_campaign_short, '-');
      this.subTitle = `En ${campaignShort} puedes lograr en tu Zona`;
     }

  ngOnInit() {
  }

}
