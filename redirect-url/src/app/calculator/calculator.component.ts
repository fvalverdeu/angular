import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  @ViewChild('result', {static: false}) result: any;
  title = 'ng-jasmine';

  constructor() { }

  ngOnInit() {
  }

  public add(num1: number, num2: number) {
    return Number(num1) + Number(num2);
  }

  public printAdd(num1: number, num2: number): any {
    this.result.nativeElement.value = this.add(num1, num2);
  }

}
