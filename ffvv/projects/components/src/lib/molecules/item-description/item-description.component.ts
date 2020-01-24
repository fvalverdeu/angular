import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.scss']
})
export class ItemDescriptionComponent implements OnInit {

  @Input() show: boolean;

  constructor() { }

  ngOnInit() {
  }

}
