import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() rows: string;
  @Input() totalRecords: string;
  @Input() pageLinkSize: string;

  constructor() {
    this.rows = '10';
    this.totalRecords = '5';
    this.pageLinkSize = '4';
  }

  ngOnInit() {
  }

}
