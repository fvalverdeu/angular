import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadBrightComponent } from './road-bright.component';

describe('RoadBrightComponent', () => {
  let component: RoadBrightComponent;
  let fixture: ComponentFixture<RoadBrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadBrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadBrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
