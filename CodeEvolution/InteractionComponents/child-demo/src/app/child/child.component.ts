import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input() loggedIn: boolean;
  message: string;
  name = 'FFVV';

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    const loggedInValue = changes['loggedIn'];
    if(loggedInValue.currentValue === true) {
      this.message = 'Welcome FFVV';
    } else  {
      this.message = 'Please log in';
    }
  }

  greetFFVV() {
    alert('Hello FFVV');
  }

}
