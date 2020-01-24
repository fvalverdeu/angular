import { Component, OnInit } from '@angular/core';
import { SessionService } from '@portal/core/services';
import { formatTextData } from 'projects/core/src/lib/utils/helpers';
import { IProfileUI } from '../../../../models/ui/profile-ui.interface';
import {UserRolEnum, ECountry} from '@portal/core/constants';
import {IProfile} from '@portal/core/models';


@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {
  profileUI: IProfileUI;
  userProfile: IProfile;
  public eCountry: typeof ECountry;

  constructor(private sessionService: SessionService) {
    this.userProfile = this.sessionService.getProfile();
   }
   get isSE() {
    return this.userProfile.cod_role === UserRolEnum.SOCIA_EMPRESARIA;
   }

  ngOnInit() {
    this.profileUI = {
      names: formatTextData(this.userProfile.names),
      role: formatTextData(this.userProfile.role),
      level: this.isSE ? formatTextData(this.userProfile.level) : '',
      cod_zone: this.userProfile.cod_zone,
      section:  this.isSE ? this.userProfile.section : '',
      cod_country: this.userProfile.cod_country
    };
  }
}
