import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // beforeEach(async(() => {
  //   component = new CalculatorComponent();
  // }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ng-jasmine'`, async(() => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const calculator = fixture.debugElement.componentInstance;
    expect(calculator.title).toEqual('ng-jasmine');
  }));

  it('should render title in h2 tag', () => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('ng-jasmine');
  })

  it('the result is 4', async(() => {
    expect(component.add(2, 2)).toEqual(4);
  }));


});
