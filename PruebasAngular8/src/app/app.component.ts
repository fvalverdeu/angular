import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  email: string;
  website: string;
  hobbies: string[];//los tipos son opcionales
  showHobbies: boolean;

  constructor(){
    this.name = 'Fernando';
    this.email = "fvalverdeu@gmail.com";
    this.website = "http://www.fatzweb.com";
    this.hobbies = ["Lectura", "fútbol", "cine"];
    this.showHobbies = false;
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }
}
