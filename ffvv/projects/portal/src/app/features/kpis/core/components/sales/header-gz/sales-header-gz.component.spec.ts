import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesHeaderGzComponent } from './sales-header-gz.component';

describe('HeaderGzComponent', () => {
  let component: SalesHeaderGzComponent;
  let fixture: ComponentFixture<SalesHeaderGzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesHeaderGzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesHeaderGzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
