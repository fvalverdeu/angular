import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGrComponent } from './home-gr.component';

describe('HomeGrComponent', () => {
  let component: HomeGrComponent;
  let fixture: ComponentFixture<HomeGrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
