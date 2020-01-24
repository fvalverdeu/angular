import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {EventService, SessionService} from '@portal/core/services';
import { CampaignService } from 'projects/core/src/lib/graphql/campaign.service';
import { MessageService } from 'primeng/api';
import { UserModel } from '@portal/core/models';
import {EPhase, UserRolEnum} from '@portal/core/constants';
import {ProfileService} from '@portal/core/graphql';
import {capitalizeWords, removeCharacter} from '@portal/core/utils';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss']
})
export class ProfileSectionComponent implements OnInit {
  @Input() selectSection: boolean;
  selectZone: boolean;
  fullnameSE: string;
  phaseSection: string;
  campaignSection: string;
  showProfSection: boolean;
  applyMagenta: boolean;
  firstText: string;

  constructor(
    private eventService: EventService,
    private sessionService: SessionService,
    private profileService: ProfileService,
    private campaignService: CampaignService,
    private messageService: MessageService,
  ) {
    this.showProfSection = false;
    this.selectZone = false;
  }

  ngOnInit() {
    this.eventService.changeSection.subscribe((sectionCode: string) => {
      this.firstText = '';
      this.fullnameSE = '';
      this.phaseSection = '';
      this.campaignSection = '';
      this.showProfSection = false;
      if (sectionCode) {
        console.log('sección seleccionada profile-section', sectionCode);
        this.loadProfileByUA(sectionCode);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectSection.previousValue) {
      if (!this.selectSection) {
        this.selectZone = true;
      }
    } else {
      this.selectZone = false;
    }
  }

  protected loadProfileByUA(sectionCode: string) {
    const profile = this.sessionService.getProfile();
    const user: UserModel = {
      userName: '',
      role: UserRolEnum.SOCIA_EMPRESARIA,
      /*country: 'CO',
      region: '18',
      zone: '1815',
      section: 'B'*/
      country: profile.cod_country,
      region: profile.cod_region,
      zone: profile.cod_zone,
      section: sectionCode
    };
    this.profileService
      .getProfileByUA(user)
      .subscribe(res => {
        this.firstText = 'Estás viendo los indicadores de:';
        this.fullnameSE = capitalizeWords(res.ProfileByUA.fullname) + ' - Socia Empresaria';
        const campaign = this.sessionService.getCampaign();
        this.campaignSection = removeCharacter(campaign.current_campaign_short, '-');
        // this.phaseSection = campaign.phase === EPhase.SALE ? 'Venta' : 'Facturación';
        if (campaign.phase === EPhase.SALE) {
          this.phaseSection = 'Venta';
          this.applyMagenta = false;
        } else {
          this.phaseSection = 'Facturación';
          this.applyMagenta = true;
        }
        this.showProfSection = true;
      }, error => this.errorAlert());
  }

  protected errorAlert() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Error en el servicio.'});
  }
}
