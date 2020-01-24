import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() groupname:string;
  @Input() selectedValues:string;
  @Input() val1:string;
  
  constructor() { }

  ngOnInit() {
  }

}
