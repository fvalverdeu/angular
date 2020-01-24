import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss', '../../_mixins.scss']
})
export class TextComponent implements OnInit {


  @Input() text: string;
  @Input() size: string;
  @Input() color: string;
  inputStyle: {};

  constructor() {
    this.color = '#2C2654';
    this.size = 'xsm';
  }

  ngOnInit() {
    this.inputStyle = {
      color: this.color
    };
  }

}
