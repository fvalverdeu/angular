import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GainFilterComponent } from './gain-filter.component';

describe('GainFilterComponent', () => {
  let component: GainFilterComponent;
  let fixture: ComponentFixture<GainFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GainFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GainFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
