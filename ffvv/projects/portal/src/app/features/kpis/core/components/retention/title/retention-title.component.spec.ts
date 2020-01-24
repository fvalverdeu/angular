import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetentionTitleComponent } from './retention-title.component';

describe('RetentionTitleComponent', () => {
  let component: RetentionTitleComponent;
  let fixture: ComponentFixture<RetentionTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetentionTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetentionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
