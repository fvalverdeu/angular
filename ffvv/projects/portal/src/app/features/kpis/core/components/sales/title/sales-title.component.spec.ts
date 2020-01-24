import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTitleComponent } from './sales-title.component';

describe('SalesTitleComponent', () => {
  let component: SalesTitleComponent;
  let fixture: ComponentFixture<SalesTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
