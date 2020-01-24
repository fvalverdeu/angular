import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetentionFindComponent } from './retention-find.component';

describe('RetentionFindComponent', () => {
  let component: RetentionFindComponent;
  let fixture: ComponentFixture<RetentionFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetentionFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetentionFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
