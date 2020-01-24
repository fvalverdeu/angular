import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GainFindComponent } from './gain-find.component';

describe('GainFindComponent', () => {
  let component: GainFindComponent;
  let fixture: ComponentFixture<GainFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GainFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GainFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
