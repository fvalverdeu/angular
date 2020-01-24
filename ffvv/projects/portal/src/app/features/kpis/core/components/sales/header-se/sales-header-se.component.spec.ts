import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesHeaderSEComponent } from './sales-header-se.component';

describe('SalesHeaderSEComponent', () => {
  let component: SalesHeaderSEComponent;
  let fixture: ComponentFixture<SalesHeaderSEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesHeaderSEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesHeaderSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
