import { Component, OnInit } from '@angular/core';
import { TelefonoModel } from './telefonoModel';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  telefonos: TelefonoModel[];
  constructor() { }

  ngOnInit() {
  }

  cargar() {
    this.telefonos = [
      {ciudad: "lima", telefono: "255465465", anexo:"488"},
      {ciudad: "ica", telefono: "255465465", anexo:"488"},
      {ciudad: "piura", telefono: "255465465", anexo:"488"},
    ]
  }
}
