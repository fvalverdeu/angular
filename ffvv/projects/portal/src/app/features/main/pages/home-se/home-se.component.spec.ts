import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSeComponent } from './home-se.component';

describe('HomeSeComponent', () => {
  let component: HomeSeComponent;
  let fixture: ComponentFixture<HomeSeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
