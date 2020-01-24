import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetentionHeaderComponent } from './retention-header.component';

describe('RetentionHeaderComponent', () => {
  let component: RetentionHeaderComponent;
  let fixture: ComponentFixture<RetentionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetentionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetentionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
