import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesFindComponent } from './sales-find.component';

describe('SalesFindComponent', () => {
  let component: SalesFindComponent;
  let fixture: ComponentFixture<SalesFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
