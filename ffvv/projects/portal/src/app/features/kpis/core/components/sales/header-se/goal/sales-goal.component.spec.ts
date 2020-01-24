import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesGoalComponent } from './sales-goal.component';

describe('SalesGoalComponent', () => {
  let component: SalesGoalComponent;
  let fixture: ComponentFixture<SalesGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
