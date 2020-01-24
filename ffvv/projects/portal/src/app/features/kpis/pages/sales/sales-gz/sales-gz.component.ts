import { Component, OnInit, OnChanges } from '@angular/core';
import {BusinessService, SessionService, EventService} from '@portal/core/services';
import {removeCharacter} from '@portal/core/utils';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sales-gz',
  templateUrl: './sales-gz.component.html',
  styleUrls: ['./sales-gz.component.scss']
})
export class SalesGzComponent implements OnInit, OnChanges {
  subTitle: string;
  sectionSelected: string;
  showZone: boolean;

  constructor(
    private businessService: BusinessService,
    private sessionService: SessionService,
    private eventService: EventService,
    private route: ActivatedRoute
  ) {
    this.showZone = false;
    this.sectionSelected = 'A';
    const section = this.route.snapshot.paramMap.get('section');
    if (section) {
      this.sectionSelected = section;
    }
    const campaign = this.sessionService.getCampaign();
    const campaignShort = removeCharacter(campaign.current_campaign_short, '-');
    if (this.businessService.isSale) {
      this.subTitle = `En ${campaignShort} tu meta es`;
    } else {
      this.subTitle = `En ${campaignShort} vas logrando`;
    }
  }

  ngOnInit() {
    this.eventService.changeSection.subscribe((sectionCode: string) => {
      this.sectionSelected = sectionCode;
    });
  }

  ngOnChanges() {
    this.eventService.changeSection.subscribe((sectionCode: string) => {
      this.sectionSelected = sectionCode;
    });
  }

}
