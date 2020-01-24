import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() backGround: string;
  @Input() typeCard: string;
  inputStyle: {};

  constructor() {
    this.backGround = '#ffffff';
    this.typeCard = 'Card';
  }

  ngOnInit() {
    this.inputStyle = {
      backgroundColor: this.backGround
    };
  }

}
