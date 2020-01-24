import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCampaignComponent } from './report-campaign.component';

describe('ReportCampaignComponent', () => {
  let component: ReportCampaignComponent;
  let fixture: ComponentFixture<ReportCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
