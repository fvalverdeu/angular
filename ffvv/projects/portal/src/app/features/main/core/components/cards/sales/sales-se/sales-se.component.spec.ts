import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSeComponent } from './sales-se.component';

describe('SalesSeComponent', () => {
  let component: SalesSeComponent;
  let fixture: ComponentFixture<SalesSeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesSeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
