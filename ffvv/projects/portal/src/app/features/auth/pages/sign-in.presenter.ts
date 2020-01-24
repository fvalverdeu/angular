import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '@portal/core/services';
import { OauthService } from '@portal/core/rest';
import { AuthService } from '../core/http/auth.service';
import { ProfileService } from '../core/graphql/profile.service';
import { OptionService } from '../core/graphql/option.service';
import {ConfigurationService} from '../core/graphql/configuration.service';
import { Router } from '@angular/router';
import { UserRolEnum } from '@portal/core/constants';
import { UserModel } from '@portal/core/models';
import { JwtHelperService } from '@auth0/angular-jwt';
import {MessageService} from 'primeng/api';
import {CampaignService} from '@portal/core/graphql';

@Injectable()
export class SignInPresenter {
  authForm: FormGroup;
  authFormAdm: FormGroup;

  private jwtHelper = new JwtHelperService();

  constructor(
    private formBuilder: FormBuilder,
    private sessionService: SessionService,
    private oAuthService: OauthService,
    private authService: AuthService,
    private profileService: ProfileService,
    private optionService: OptionService,
    private messageService: MessageService,
    private router: Router,
    private configurationService: ConfigurationService,
    private campaignService: CampaignService,
  ) {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      app: ['web'],
      country: ['PE'],
      role: ['']
    });

    this.authFormAdm = this.formBuilder.group({
      country: ['', [Validators.required, Validators.maxLength(2)]],
      region: ['', [Validators.required, Validators.maxLength(2)]],
      zone: [''],
      section: [''],
      password: ['']
    });
  }

  get usernameField() {
    return this.authForm.get('username');
  }

  get passwordField() {
    return this.authForm.get('password');
  }

  get countryField() {
    return this.authFormAdm.get('country');
  }

  get regionField() {
    return this.authFormAdm.get('region');
  }

  get zoneField() {
    return this.authFormAdm.get('zone');
  }

  get sectionField() {
    return this.authFormAdm.get('section');
  }


  signIn() {
    if (this.authForm.invalid) {
      return;
    }
    this.authService.signIn(this.authForm.value).subscribe(res => {
      if (res.type === 200) {
        const decodeToken = this.jwtHelper.decodeToken(res.detail.accessToken);
        const user = new UserModel(decodeToken);
        console.log('internal token: ', user);
        this.sessionService.setUser(user);
        this.sessionService.setExternal(false);
        this.accessApiManager();
      } else {
        console.log('Error: Type', res.type);
        this.errorAlert();
      }
    }, error => {
      this.errorAlert();
      this.sessionService.clearStorage();
    });
  }

  signInAdm() {
    if (this.authFormAdm.invalid) {
      return;
    }
    this.authService.signInAdm(this.authFormAdm.value).subscribe(res => {
      if (res.type === 200) {
        const decodeToken = this.jwtHelper.decodeToken(res.detail.accessToken);
        const user = new UserModel(decodeToken);
        console.log('internal token: ', user);
        this.sessionService.setUser(user);
        this.sessionService.setExternal(false);
        this.accessApiManager();
      } else {
        console.log('Error: Type', res.type);
        this.errorAlert();
      }
    }, error => {
      this.errorAlert();
      this.sessionService.clearStorage();
    });
  }

  protected accessApiManager() {
    this.oAuthService.generateOAuthToken().subscribe(res => {
      this.sessionService.setOauthToken(res.access_token);
      this.loadProfile();
    }, error => {
      this.errorAlert();
      this.sessionService.clearStorage();
    });
  }

  protected loadProfile() {
    console.log('Loading Profile');
    const user = this.sessionService.getUser();
    this.profileService
      .getProfile(user)
      .subscribe(res => {
        this.sessionService.setProfile(res);
        this.loadCampaign();
      }, error => {
        this.errorAlert();
        this.sessionService.clearStorage();
      });
  }

  protected loadCampaign() {
    console.log('Loading Campaign');
    const profile = this.sessionService.getProfile();
    this.campaignService.getCampaign(profile).subscribe(res => {
      this.sessionService.setCampaign(res);
      this.loadOptions();
    }, error => {
      this.errorAlert();
      this.sessionService.clearStorage();
    });
  }

  protected loadOptions() {
    console.log('Loading Options');
    const profile = this.sessionService.getProfile();
    this.optionService.getOptions(profile).subscribe(res => {
      this.sessionService.setOptions(res);
      this.loadConfiguration();
    }, error => {
      this.errorAlert();
      this.sessionService.clearStorage();
    });
  }

  protected loadConfiguration() {
    console.log('Loading Configuration');
    const user = this.sessionService.getUser();
    this.configurationService
      .getConfiguration(user.country)
      .subscribe(res => {
        this.sessionService.setConfiguration(res);
        this.router.navigateByUrl(this.homeNavigationByRole());
      }, error => {
        this.sessionService.clearStorage();
      });
  }

  protected homeNavigationByRole() {
    let navigation = ''; // URL no autorizado
    const role = this.sessionService.getUser().role; // sonar scanner
    switch (role) {
      case UserRolEnum.SOCIA_EMPRESARIA:
        navigation = '/PortalFFVV/home-se';
        break;
      case UserRolEnum.GERENTE_ZONA:
        navigation = '/PortalFFVV/home-gz';
        break;
      case UserRolEnum.GERENTE_REGION:
        navigation = '/PortalFFVV/home-gr';
        break;
      case UserRolEnum.DIRECTOR_VENTA:
        navigation = '/PortalFFVV/home-dv';
        break;
    }
    return navigation;
  }

  signInExternal(externalToken: string) {
    const decodeToken = this.jwtHelper.decodeToken(externalToken);
    const user = new UserModel(null, decodeToken);
    console.log('external token: ', user);
    this.sessionService.setUser(user);
    this.sessionService.setExternal(true);
    this.accessApiManager();
  }

  protected errorAlert() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Usuario y/o contraseña incorrecto.'});
  }
}
