import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCompleteComponent } from './progress-complete.component';

describe('ProgressCompleteComponent', () => {
  let component: ProgressCompleteComponent;
  let fixture: ComponentFixture<ProgressCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
