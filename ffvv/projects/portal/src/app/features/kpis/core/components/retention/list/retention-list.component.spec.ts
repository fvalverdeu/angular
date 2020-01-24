import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetentionListComponent } from './retention-list.component';

describe('RetentionListComponent', () => {
  let component: RetentionListComponent;
  let fixture: ComponentFixture<RetentionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetentionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetentionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
