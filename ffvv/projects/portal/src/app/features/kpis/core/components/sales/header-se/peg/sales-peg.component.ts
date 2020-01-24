import { Component, OnInit, Input } from '@angular/core';
import {UserTest} from '@portal/core/models';
import { ISalePegUI } from '../../../../../models/ui/sales-ui.interface';

@Component({
  selector: 'app-sales-peg',
  templateUrl: './sales-peg.component.html',
  styleUrls: ['./sales-peg.component.scss']
})
export class SalesPegComponent implements OnInit {

  @Input() salePeg: ISalePegUI;

  role: string;
  phase: string;
  roadBright: boolean;
  sale: boolean;
  userTest: UserTest;
  constructor() { }

  ngOnInit() {
    this.userTest = new UserTest();
    this.role = this.userTest.role;
    this.roadBright = this.userTest.roadBright;
    this.sale = this.userTest.sale;
    console.log('Sales-Peg, es venta :' + this.sale + ' es camino brillante :' + this.roadBright);

  }

}
