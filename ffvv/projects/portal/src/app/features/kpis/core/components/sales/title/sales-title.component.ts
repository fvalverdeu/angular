import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-title',
  templateUrl: './sales-title.component.html',
  styleUrls: ['./sales-title.component.scss']
})
export class SalesTitleComponent implements OnInit {
  @Input() rightTitle: string;
  leftTitle: string;
  color: string;
  sale: boolean;
  roadBright: boolean;
  others: boolean;
  data: boolean;
  size: string;

  constructor(private router: Router) {
    this.data = true;
    this.sale = true;
    this.roadBright = true;
    this.others = false;
  }

  ngOnInit() {
    this.leftTitle = 'Venta y Pedidos';
    this.size = 'xmd';
    this.color = '#000000';
  }

  redirect() {
    this.router.navigateByUrl('/kpis/gain-se');
  }
}
