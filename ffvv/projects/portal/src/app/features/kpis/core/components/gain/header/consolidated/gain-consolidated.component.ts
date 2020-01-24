import { Component, OnInit, Input } from '@angular/core';
import { IGainGZConsolidatedUI } from '../../../../../models/ui/kpi-gain-ui.interface';

@Component({
  selector: 'app-gain-consolidated',
  templateUrl: './gain-consolidated.component.html',
  styleUrls: ['./gain-consolidated.component.scss']
})
export class GainConsolidatedComponent implements OnInit {

  @Input() consolidatedUI: IGainGZConsolidatedUI;
  @Input() days31: boolean;

  cols: any[];

  constructor() { }

  ngOnInit() {
    this.cols = [
        { field: 'section', header: 'SECCIONES' },
        { field: 'recovery_percent', header: '% RECUPERACIÓN' },
        { field: 'billing', header: 'FACTURADO' },
        { field: 'recovery', header: 'RECUPERADO' }
    ];
    console.log(this.consolidatedUI);
  }

}
