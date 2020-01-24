import { Component, OnInit } from '@angular/core';
import {CarService} from './test/carservice.service';
import {Car} from './test/car';
import {MessageService} from 'primeng/api';

export class PrimeCar implements Car {
  constructor(public vin?, public year?, public brand?, public color?) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CarService]
})
export class AppComponent {
  displayDialog: boolean;
  car: Car = new PrimeCar();
  selectedCar: Car;
  newCar: boolean;
  cars: Car[];
  cols: any[];

  constructor(
    private carService: CarService,
    private messageService: MessageService
  ) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    // this.carService.getCarsSmall().then(cars => this.cars = cars);

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = new PrimeCar();
    this.displayDialog = true;
  }

  save() {
    const cars = [...this.cars];
    if (this.newCar) {
      cars.push(this.car);
    } else {
      cars[this.findSelectedCarIndex()] = this.car;
    }
    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.findSelectedCarIndex();
    this.cars = this.cars.filter((val, i) => i !== index);
    this.car = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.car = {...event.data};
    this.displayDialog = true;
  }

  findSelectedCarIndex(): number {
    return this.cars.indexOf(this.selectedCar);
  }

  showError() {
    this.messageService.add({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
  }
}
