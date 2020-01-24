import { Component, OnInit, Input } from '@angular/core';
import { ISaleGoalUI } from '../../../../../models/ui/sales-ui.interface';

@Component({
  selector: 'app-sales-goal',
  templateUrl: './sales-goal.component.html',
  styleUrls: ['./sales-goal.component.scss']
})
export class SalesGoalComponent implements OnInit {

  @Input() saleGoal: ISaleGoalUI;
  @Input() sale: boolean;
  @Input() roadBright: boolean;

  goalText: string;

  constructor() {
    this.sale = false;
    this.roadBright = false;
  }

  ngOnInit() {
    console.log('Sales-Peg, es venta :' + this.sale + ' es camino brillante :' + this.roadBright);
    if (this.sale) {
      if (this.roadBright) {
        this.goalText = 'Meta Venta Cat. ' + this.saleGoal.currentCampaign;
        // this.goal = '$ 60,000';
      } else {
        this.goalText = 'Meta Pedidos ' + this.saleGoal.currentCampaign;
        // this.goal = '100 Pedidos';
      }
    }
  }

}
