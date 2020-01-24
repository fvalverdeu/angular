import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GainConsolidatedComponent } from './gain-consolidated.component';

describe('GainConsolidatedComponent', () => {
  let component: GainConsolidatedComponent;
  let fixture: ComponentFixture<GainConsolidatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GainConsolidatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GainConsolidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
