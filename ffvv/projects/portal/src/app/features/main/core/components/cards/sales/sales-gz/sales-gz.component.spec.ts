import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesGzComponent } from './sales-gz.component';

describe('SalesGzComponent', () => {
  let component: SalesGzComponent;
  let fixture: ComponentFixture<SalesGzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesGzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesGzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
