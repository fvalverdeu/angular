import { Component, OnInit, Input } from '@angular/core';
import { ISaleCatalogUI } from '../../../../../models/ui/sales-ui.interface';
import { SessionService } from '@portal/core/services';

@Component({
  selector: 'app-sales-catalog',
  templateUrl: './sales-catalog.component.html',
  styleUrls: ['./sales-catalog.component.scss']
})
export class SalesCatalogComponent implements OnInit {

  @Input() saleCatalog: ISaleCatalogUI;
  @Input() sale: boolean;
  @Input() roadBright: boolean;

  role: string;
  phase: string;
  currencySymbol: string;

  constructor(private sessionService: SessionService) {
    this.sale = false;
    this.roadBright = false;
  }

  ngOnInit() {
    this.currencySymbol = this.sessionService.getConfiguration().currency_symbol;
    console.log('Sales-Sale-Catalog, es venta :' + this.sale + ' es camino brillante :' + this.roadBright);
  }

}
