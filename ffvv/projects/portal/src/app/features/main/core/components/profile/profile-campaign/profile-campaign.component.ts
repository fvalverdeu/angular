import { Component, OnInit } from '@angular/core';
import { SessionService } from '@portal/core/services';
import { ICampaign } from '@portal/core/models';
import { removeCharacter } from '@portal/core/utils';

@Component({
  selector: 'app-profile-campaign',
  templateUrl: './profile-campaign.component.html',
  styleUrls: ['./profile-campaign.component.scss']
})
export class ProfileCampaignComponent implements OnInit {
  campaign: ICampaign;
  kindofCampaign: boolean;
  profileCampaign: string;
  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.campaign = this.sessionService.getCampaign();
    this.campaign.current_campaign_short = removeCharacter(this.campaign.current_campaign_short, '-')
    if (this.campaign.phase === 'V') {
      this.kindofCampaign = true;
    } else {
      this.kindofCampaign = false;
    }
    this.profileCampaign = removeCharacter(this.campaign.current_campaign_short, '-');
  }

}
