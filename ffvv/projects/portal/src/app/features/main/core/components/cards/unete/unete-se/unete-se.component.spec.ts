import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UneteSeComponent } from './unete-se.component';

describe('UneteSeComponent', () => {
  let component: UneteSeComponent;
  let fixture: ComponentFixture<UneteSeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UneteSeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UneteSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
