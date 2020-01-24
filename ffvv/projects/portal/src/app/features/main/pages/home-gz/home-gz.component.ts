import { Component, OnInit } from '@angular/core';
import { UserTest } from '@portal/core/models';
import { EventService } from 'projects/core/src/lib/services/event.service';

@Component({
  selector: 'app-home-gz',
  templateUrl: './home-gz.component.html',
  styleUrls: ['./home-gz.component.scss']
})
export class HomeGzComponent implements OnInit {
  data: boolean;
  size: string;
  title: string;
  color: string;
  showTitle: boolean;

  userTest: UserTest;
  role: string;
  sale: boolean;
  roadBright: boolean;
  dop: boolean;
  others: boolean;
  cars: any[];
  showZone: boolean;

  constructor(private eventService: EventService) {
    this.data = true;
    this.userTest = new UserTest();
    this.role = this.userTest.role;
    this.roadBright = this.userTest.roadBright;
    this.sale = this.userTest.sale;
    this.dop = this.userTest.dop;
    this.others = this.userTest.others;
    this.cars = ['uno'];
    this.showTitle = true;
    this.showZone = true;
  }

  ngOnInit() {
    this.title = 'Camino Brillante';
    this.size = 'xmd';
    this.color = '#000000';
    this.eventService.changeSection.subscribe((res: string) => {
      if (res === '') {
        this.showTitle = true;
      } else {
        this.showTitle = false;
      }
    });
  }

}
