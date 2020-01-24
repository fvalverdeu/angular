import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGzComponent } from './home-gz.component';

describe('HomeGzComponent', () => {
  let component: HomeGzComponent;
  let fixture: ComponentFixture<HomeGzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
