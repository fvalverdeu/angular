import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GainTitleComponent } from './gain-title.component';

describe('GainTitleComponent', () => {
  let component: GainTitleComponent;
  let fixture: ComponentFixture<GainTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GainTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GainTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
