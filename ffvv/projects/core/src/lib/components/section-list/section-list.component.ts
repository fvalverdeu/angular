import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IAdmUnitResponse } from '@portal/core/models/response';
import { ISectionUI } from '@portal/core/models';
import {EventService, SessionService} from '@portal/core/services';
import {AdministrativeUnitService} from '@portal/core/rest';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit {
  @ViewChild('sectionsContent', {static: false}) sectionsContent: ElementRef;
  @Input() showZone: boolean;
  @Input() sectionDefault: string;
  data: ISectionUI[];
  selectedSection: string;
  scrollRightEnd: boolean;
  scrollLeftEnd: boolean;

  constructor(
    private admUnitService: AdministrativeUnitService,
    private sessionService: SessionService,
    private messageService: MessageService,
    private eventService: EventService
  ) {
    this.scrollLeftEnd = true;
  }

  ngOnInit() {
    this.getData();
    if (this.sectionDefault.length != 0) {
      this.loadData(this.sectionDefault);
    }
  }

  getData() {
    const profile = this.sessionService.getProfile();
    this.admUnitService
    .getAdmUnit(profile.cod_country, profile.cod_region, profile.cod_zone, 'true')
    .subscribe((res: IAdmUnitResponse[]) => {
      this.data = res.map((item: ISectionUI) => {
        return  {
          section_id: item.section_id,
          section_code: item.section_code
        };
      }).sort((a, b) => {
        if (a.section_code > b.section_code) {
          return 1;
        }
        if (a.section_code < b.section_code) {
          return -1;
        }
        return 0;
      });
    });
  }

  loadData(sectionCode: string) {
    this.selectedSection = sectionCode;
    this.eventService.changeSection.emit(sectionCode);
  }

  errorAlert() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Datos incorrectos.'});
  }

  scrollLeft() {
    this.sectionsContent.nativeElement.scrollLeft -= 150;
    this.scrollEnd();
  }
  scrollRight() {
    this.sectionsContent.nativeElement.scrollLeft += 150;
    this.scrollEnd();
  }
  scrollEnd() {
    const elem = this.sectionsContent.nativeElement;
    const newScrollLeft = elem.scrollLeft;
    // const width = elem.clientWidth;
    const width = elem.offsetWidth;
    const scrollWidth = elem.scrollWidth;
    if (Math.round(scrollWidth - newScrollLeft) === width) {
      this.scrollRightEnd = true;
    } else {
      this.scrollRightEnd = false;
    }
    if (newScrollLeft === 0) {
      this.scrollLeftEnd = true;
    } else {
      this.scrollLeftEnd = false;
    }
  }
}
