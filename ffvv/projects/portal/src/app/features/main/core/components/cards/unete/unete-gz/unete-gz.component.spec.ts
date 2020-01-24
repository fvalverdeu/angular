import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UneteGzComponent } from './unete-gz.component';

describe('UneteGzComponent', () => {
  let component: UneteGzComponent;
  let fixture: ComponentFixture<UneteGzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UneteGzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UneteGzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
