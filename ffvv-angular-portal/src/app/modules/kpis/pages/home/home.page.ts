import { Component } from '@angular/core';

@Component({
  selector: 'app-kpis-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  Indiastate = [
    "Rajasthan",
    "UP",
    "Mp",
    "Delhi",
    "Goa",
    "Gurjat",
    "Punjab"
  ];
  Ausstate = [

    "New South Wales",
    "Queensland",
    "South Australia",
    "Tasmania"
  ];
  Slstate = [
    "Kandy",
    "Galle",
    "Kegalle",
    "Mannar"
  ];
}
