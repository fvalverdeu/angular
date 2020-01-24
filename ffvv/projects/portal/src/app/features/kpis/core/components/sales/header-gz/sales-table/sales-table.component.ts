import {Component, Input, OnInit} from '@angular/core';
import {ISalesOrdersUI} from '../../../../../models/ui/sales-ui.interface';

@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.scss']
})
export class SalesTableComponent implements OnInit {
  @Input() salesOrders: ISalesOrdersUI;
  showSale: boolean;
  showOrder: boolean;
  showActivity: boolean;
  showCapitalization: boolean;
  showPegs: boolean;

  constructor() {
    this.showSale = true;
  }

  ngOnInit() {
  }

  activeSale() {
    this.showSale = true;
    this.showOrder = false;
    this.showActivity = false;
    this.showCapitalization = false;
    this.showPegs = false;
  }
  activeOrder() {
    this.showSale = false;
    this.showOrder = true;
    this.showActivity = false;
    this.showCapitalization = false;
    this.showPegs = false;
  }
  activeActivity() {
    this.showSale = false;
    this.showOrder = false;
    this.showActivity = true;
    this.showCapitalization = false;
    this.showPegs = false;
  }
  activeCapitalization() {
    this.showSale = false;
    this.showOrder = false;
    this.showActivity = false;
    this.showCapitalization = true;
    this.showPegs = false;
  }
  activePegs() {
    this.showSale = false;
    this.showOrder = false;
    this.showActivity = false;
    this.showCapitalization = false;
    this.showPegs = true;
  }
}
