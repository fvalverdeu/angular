import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCapitalizationComponent } from './sales-capitalization.component';

describe('SalesCapitalizationComponent', () => {
  let component: SalesCapitalizationComponent;
  let fixture: ComponentFixture<SalesCapitalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesCapitalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCapitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
