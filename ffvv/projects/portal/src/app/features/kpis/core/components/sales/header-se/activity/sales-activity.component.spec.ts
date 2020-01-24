import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesActivityComponent } from './sales-activity.component';

describe('SalesActivityComponent', () => {
  let component: SalesActivityComponent;
  let fixture: ComponentFixture<SalesActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
