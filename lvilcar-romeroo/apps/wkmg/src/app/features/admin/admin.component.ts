import { Component, OnInit } from '@angular/core';

interface MenuOption {
  icon: string;
  title: string;
  path: string[];
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  menuOptions: MenuOption[] = [
    { icon: 'home', title: 'Inicio', path: ['./'] },
    { icon: 'home', title: 'Talleres', path: ['./workshops'] },
    { icon: 'home', title: 'Instructores', path: ['./instructors'] },
  ];

  constructor() { }

  ngOnInit() {
  }

}
