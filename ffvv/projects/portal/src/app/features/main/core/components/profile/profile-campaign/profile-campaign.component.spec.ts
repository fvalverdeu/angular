import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCampaignComponent } from './profile-campaign.component';

describe('ProfileCampaignComponent', () => {
  let component: ProfileCampaignComponent;
  let fixture: ComponentFixture<ProfileCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
