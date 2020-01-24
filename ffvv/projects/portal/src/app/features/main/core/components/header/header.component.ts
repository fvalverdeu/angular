import { Component, OnInit } from '@angular/core';
import {SessionService} from '@portal/core/services';
import {IOption, ISubOption, IProfile} from '@portal/core/models';
import {MenuItem} from 'primeng/api';
import {EOption, UserRolEnum} from "@portal/core/constants";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  optionsHeader: IOption[];
  showMenu = false;
  showPerfil = false;
  showMenuMobile = false;
  profile: IProfile;

  // isData = false;
  // sidebar = false;
  /// items: MenuItem[];

  constructor(private sessionService: SessionService, private router: Router) {}

  ngOnInit() {
    const options = this.sessionService.getOptions();
    this.optionsHeader = options.filter(x => x.option_type === EOption.HEADER);
    console.log(this.optionsHeader);
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  togglePerfil() {
    this.showPerfil = !this.showPerfil;
  }
  toggleMenuMobile() {
    this.showMenuMobile = !this.showMenuMobile;
  }
  haveData(array: ISubOption[]) {
    return array.length > 0;
  }

  signOut() {
    this.profile = this.sessionService.getProfile();
    const external = this.sessionService.getExternal();
    localStorage.clear();
    if (this.profile.cod_role === UserRolEnum.SOCIA_EMPRESARIA && external) {
      window.location.href = 'https://sbepdqa.somosbelcorp.com/Login/LogOut';
    } else {
      this.router.navigateByUrl('/auth/sign-in');
    }
  }

  /*hidden() {
    this.show = !this.show;
  }
  hide() {
    this.sidebar = !this.sidebar;
  }*/
}
