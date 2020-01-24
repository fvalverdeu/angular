import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GainHeaderComponent } from './gain-header.component';

describe('GainHeaderComponent', () => {
  let component: GainHeaderComponent;
  let fixture: ComponentFixture<GainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GainHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
