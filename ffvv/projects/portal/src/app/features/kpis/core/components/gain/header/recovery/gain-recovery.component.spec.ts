import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GainRecoveryComponent } from './gain-recovery.component';

describe('GainRecoveryComponent', () => {
  let component: GainRecoveryComponent;
  let fixture: ComponentFixture<GainRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GainRecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GainRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
