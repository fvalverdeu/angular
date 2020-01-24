import { Component, OnInit } from '@angular/core';
import { UserTest } from '@portal/core/models';

@Component({
  selector: 'app-road-bright',
  templateUrl: './road-bright.component.html',
  styleUrls: ['./road-bright.component.scss']
})
export class RoadBrightComponent implements OnInit {

  data: boolean;
  size: string;
  title: string;
  color: string;

  userTest: UserTest;
  role: string;
  sale: boolean;
  roadBright: boolean;
  dop: boolean;
  others: boolean;
  cars: any[];

  constructor() {
    this.data = true;
    this.userTest = new UserTest();
    this.role = this.userTest.role;
    this.roadBright = this.userTest.roadBright;
    this.sale = this.userTest.sale;
    this.dop = this.userTest.dop;
    this.others = this.userTest.others;
    this.cars = ['uno'];
  }

  ngOnInit() {
    this.title = 'Camino Brillante';
    this.size = 'xmd';
    this.color = '#000000';
  }

}
