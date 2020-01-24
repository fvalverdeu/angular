import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GainGzComponent } from './gain-gz.component';

describe('GainGzComponent', () => {
  let component: GainGzComponent;
  let fixture: ComponentFixture<GainGzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GainGzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GainGzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
