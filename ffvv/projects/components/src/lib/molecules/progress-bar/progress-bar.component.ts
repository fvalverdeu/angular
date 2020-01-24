import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() left: string;
  @Input() right: string;
  @Input() value: number;

  constructor() {
    this.value = 30;
  }

  ngOnInit() {
  }

}
