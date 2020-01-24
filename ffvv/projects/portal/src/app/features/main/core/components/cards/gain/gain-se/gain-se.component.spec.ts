import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GainSeComponent } from './gain-se.component';

describe('GainSeComponent', () => {
  let component: GainSeComponent;
  let fixture: ComponentFixture<GainSeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GainSeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GainSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
