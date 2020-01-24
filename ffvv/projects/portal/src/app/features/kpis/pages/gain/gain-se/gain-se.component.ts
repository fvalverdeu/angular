import { Component, OnInit } from '@angular/core';
import {SessionService} from '@portal/core/services';
import {removeCharacter} from '@portal/core/utils';

@Component({
  selector: 'app-gain-se',
  templateUrl: './gain-se.component.html',
  styleUrls: ['./gain-se.component.scss']
})
export class GainSeComponent implements OnInit {
  prevCampaign: string
  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    const userCampaign = this.sessionService.getCampaign();
    this.prevCampaign =  removeCharacter(userCampaign.previous_campaign_short, '-');
  }
}
