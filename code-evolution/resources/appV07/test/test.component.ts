import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
              Welcome {{name}}
            </h2>
            <h2 class="text-success">Fer</h2>
            <h2 [class]="successClass">Fer</h2>
            <h2 class="text-special" [class]="successClass">Fer</h2>
            <h2 [class.text-danger]="hasError">CodEvolution</h2>
            <h2 [ngClass]="messageClasses">CodEvolution</h2>
            `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Fernando";
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
