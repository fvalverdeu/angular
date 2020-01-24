import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCatalogComponent } from './sales-catalog.component';

describe('SalesCatalogComponent', () => {
  let component: SalesCatalogComponent;
  let fixture: ComponentFixture<SalesCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
