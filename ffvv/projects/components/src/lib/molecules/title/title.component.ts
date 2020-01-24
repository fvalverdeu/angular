import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() title: string;
  @Input() size: string;
  @Input() color: string;
  inputStyle: {};

  constructor() {
    this.size = 'md';
    this.color = '#2C2654';
  }

  ngOnInit() {
    this.inputStyle = {
      color: this.color
    };
  }
}
