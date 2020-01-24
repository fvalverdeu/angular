import { Component, OnInit } from '@angular/core';
import { UserTest } from '@portal/core/models';

@Component({
  selector: 'app-inspira',
  templateUrl: './inspira.component.html',
  styleUrls: ['./inspira.component.scss']
})
export class InspiraComponent implements OnInit {
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
    this.title = 'Programa Inspira';
    this.size = 'xmd';
    this.color = '#000000';
  }
}
