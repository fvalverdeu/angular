import {Component, Input, OnInit} from '@angular/core';
import {SessionService} from '@portal/core/services';
import {ISaleOrderGzUI} from '../../../../../models/ui/sales-ui.interface';

@Component({
  selector: 'app-sales-card',
  templateUrl: './sales-card.component.html',
  styleUrls: ['./sales-card.component.scss']
})
export class SalesCardComponent implements OnInit {
  @Input() saleOrderGZ: ISaleOrderGzUI;
  currencySymbol: string;

  constructor(private sessionService: SessionService) {
    this.currencySymbol = this.sessionService.getConfiguration().currency_symbol;
  }

  ngOnInit() {
  }
}
