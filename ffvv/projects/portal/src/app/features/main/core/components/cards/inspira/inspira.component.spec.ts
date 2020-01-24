import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspiraComponent } from './inspira.component';

describe('InspiraComponent', () => {
  let component: InspiraComponent;
  let fixture: ComponentFixture<InspiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
