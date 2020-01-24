import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpisComponent } from './kpis.component';

describe('KpisComponent', () => {
  let component: KpisComponent;
  let fixture: ComponentFixture<KpisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
