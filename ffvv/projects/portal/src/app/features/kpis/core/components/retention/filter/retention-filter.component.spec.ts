import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetentionFilterComponent } from './retention-filter.component';

describe('RetentionFilterComponent', () => {
  let component: RetentionFilterComponent;
  let fixture: ComponentFixture<RetentionFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetentionFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetentionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
