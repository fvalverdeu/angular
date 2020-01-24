import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetentionSeComponent } from './retention-se.component';

describe('RetentionSeComponent', () => {
  let component: RetentionSeComponent;
  let fixture: ComponentFixture<RetentionSeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetentionSeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetentionSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
