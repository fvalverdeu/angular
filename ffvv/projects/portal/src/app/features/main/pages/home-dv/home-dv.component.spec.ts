import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDvComponent } from './home-dv.component';

describe('HomeDvComponent', () => {
  let component: HomeDvComponent;
  let fixture: ComponentFixture<HomeDvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
