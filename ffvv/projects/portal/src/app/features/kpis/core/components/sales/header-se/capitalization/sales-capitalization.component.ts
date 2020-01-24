import { Component, OnInit, Input } from '@angular/core';
import {UserTest} from '@portal/core/models';
import { ISaleCapitalizeUI } from '../../../../../models/ui/sales-ui.interface';

@Component({
  selector: 'app-sales-capitalization',
  templateUrl: './sales-capitalization.component.html',
  styleUrls: ['./sales-capitalization.component.scss']
})
export class SalesCapitalizationComponent implements OnInit {

  @Input() saleCapitalize: ISaleCapitalizeUI;

  role: string;
  phase: string;
  roadBright: boolean;
  sale: boolean;
  others: boolean;
  userTest: UserTest;

  capitalizationIngresos: string;
  capitalizationReingresos: string;
  capitalizationEgresos: string;

  constructor() {}

  ngOnInit() {
    this.userTest = new UserTest();
    this.role = this.userTest.role;
    this.roadBright = this.userTest.roadBright;
    this.others = this.userTest.others;
    this.sale = this.userTest.sale;
    console.log('Sales-Capitalization, es venta :' + this.sale + ' es camino brillante :' + this.roadBright);

    if (this.sale) {
      this.capitalizationIngresos = '10 Consultoras';
      this.capitalizationReingresos = '5 Consultoras';
      this.capitalizationEgresos = '3 Consultoras';
    } else {
      this.capitalizationIngresos = '10 Consultoras';
      this.capitalizationReingresos = '5 Consultoras';
      this.capitalizationEgresos = '-';
    }
  }

}
