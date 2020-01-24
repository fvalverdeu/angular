import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPegComponent } from './sales-peg.component';

describe('SalesPegComponent', () => {
  let component: SalesPegComponent;
  let fixture: ComponentFixture<SalesPegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
