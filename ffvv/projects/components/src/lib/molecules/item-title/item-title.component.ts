import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-item-title',
  templateUrl: './item-title.component.html',
  styleUrls: ['./item-title.component.scss']
})
export class ItemTitleComponent implements OnInit {

  @Output() onActive: EventEmitter<any> = new EventEmitter();
  toggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  clickEvent() {
    console.log('toggle item title', this.toggle);
    this.toggle = !this.toggle;
    this.onActive.emit(this.toggle);
  }

}
