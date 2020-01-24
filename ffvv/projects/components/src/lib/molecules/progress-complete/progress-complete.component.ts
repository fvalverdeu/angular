import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-progress-complete',
  templateUrl: './progress-complete.component.html',
  styleUrls: ['./progress-complete.component.scss']
})
export class ProgressCompleteComponent implements OnInit {

  @Input() left: string;
  @Input() right: string;
  @Input() value: number;

  constructor() {
    this.value = 30;
  }

  ngOnInit() {
  }
}
