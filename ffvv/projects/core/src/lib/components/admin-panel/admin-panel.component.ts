import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Role } from '../../models/role.model';
import { ICountry, IRegion, IZone, ISection } from '../../models/adm-unit.model';
import { ICampaign } from '../../models/campaign.interface';
import { IProfile } from '../../models/profile.interface';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'core-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  profileSelect: SelectItem[];
  profileList: Role[];
  countrySelect: SelectItem[];
  countryList: ICountry[];
  regionSelect: SelectItem[];
  regionList: IRegion[];
  zoneSelect: SelectItem[];
  zoneList: IZone[];
  sectionSelect: SelectItem[];
  sectionList: ISection[];
  selectedRole: string = null;
  selectedCountry: string = null;
  selectedRegion: string = null;
  selectedZone: string = null;
  selectedSection: string = null;

  showPanel = false;
  showSac = false;
  isSac = false;
  showGR = false;
  showGZ = false;
  showSE = false;
  userProfile: IProfile;
  campaign: ICampaign;

  constructor() { }

  ngOnInit() {
  }

}
