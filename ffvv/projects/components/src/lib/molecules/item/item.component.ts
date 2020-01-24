import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  toggle = false;

  constructor() { }

  ngOnInit() {
  }

  clickEvent() {
    this.toggle = !this.toggle;
  }
}
