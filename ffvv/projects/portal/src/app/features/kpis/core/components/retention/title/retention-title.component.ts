import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retention-title',
  templateUrl: './retention-title.component.html',
  styleUrls: ['./retention-title.component.scss']
})
export class RetentionTitleComponent implements OnInit {


  title: string;
  color: string;
  sale: boolean;
  roadBright: boolean;
  others: boolean;
  data: boolean;
  size: string;

  constructor() {
    this.data = true;
    this.sale = true;
    this.roadBright = true;
    this.others = false;
  }

  ngOnInit() {
    this.title = 'Ciclo de Nuevas';
    this.size = 'xmd';
    this.color = '#000000';
  }

}
