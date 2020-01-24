import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProfile, ICampaign } from '@portal/core/models';
import { SessionService } from '@portal/core/services';
import { IGainGZRecoveryUI } from '../../../../../models/ui/kpi-gain-ui.interface';

@Component({
  selector: 'app-gain-recovery',
  templateUrl: './gain-recovery.component.html',
  styleUrls: ['./gain-recovery.component.scss']
})
export class GainRecoveryComponent implements OnInit {

  @Input() recoveryUI: IGainGZRecoveryUI;

  userProfile: IProfile;
  campaignProfile: ICampaign;
  activeButton: boolean;
  colorValues: string;
  @Output() day31 = new EventEmitter<boolean>();

  constructor(private sessionService: SessionService) {
    this.userProfile = this.sessionService.getProfile();
    this.campaignProfile = this.sessionService.getCampaign();
    this.activeButton = false;
    this.colorValues = '#2C2654';
  }

  ngOnInit() { }

  handleChange(e) {
    this.day31.emit(this.activeButton);
  }

}
