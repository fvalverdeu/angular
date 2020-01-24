import { Component, OnInit } from '@angular/core';
import { UserTest } from '@portal/core/models';

@Component({
  selector: 'app-report-campaign',
  templateUrl: './report-campaign.component.html',
  styleUrls: ['./report-campaign.component.scss']
})
export class ReportCampaignComponent implements OnInit {

  title: string;
  size: string;
  color: string;
  backGround: string;

  data: boolean;
  userTest: UserTest;
  role: string;
  sale: boolean;
  roadBright: boolean;
  dop: boolean;
  others: boolean;

  constructor() {
    this.data = true;
    this.userTest = new UserTest();
    this.role = this.userTest.role;
    this.roadBright = this.userTest.roadBright;
    this.sale = this.userTest.sale;
    this.dop = this.userTest.dop;
    this.others = this.userTest.others;
  }

  ngOnInit() {
    this.title = 'Reporte de Campaña';
    this.color = 'white';
    this.backGround = '#817BD0';
  }


}
