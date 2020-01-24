import { Component, OnInit, Input } from '@angular/core';
import { ISaleActivityUI } from '../../../../../models/ui/sales-ui.interface';

@Component({
  selector: 'app-sales-activity',
  templateUrl: './sales-activity.component.html',
  styleUrls: ['./sales-activity.component.scss']
})
export class SalesActivityComponent implements OnInit {

  @Input() saleActivity: ISaleActivityUI;

  role: string;
  roadBright: boolean;
  sale: boolean;

  constructor() {}

  ngOnInit() {
    console.log('Sales-Activity, es venta :' + this.sale + ' es camino brillante :' + this.roadBright);
  }

}
