import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetentionGzComponent } from './retention-gz.component';

describe('RetentionGzComponent', () => {
  let component: RetentionGzComponent;
  let fixture: ComponentFixture<RetentionGzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetentionGzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetentionGzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
