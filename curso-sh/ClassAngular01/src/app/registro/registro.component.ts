import { Component, OnInit } from '@angular/core';
import { Participante } from '../models/participante';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParticipanteService } from '../service/participante.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  participante: Participante = { nombre: '', correo: '', contrasena: '' };

  grupo: FormGroup;

  titulo: string = 'Registro';
  // nombre: string = 'Fernando';
  // correo: string = '';

  // private participanteService;

  // constructor(participanteService: ParticipanteService) {
  //   this.participanteService = participanteService;
  // }

  constructor(private readonly participanteService: ParticipanteService) {
    
    // setTimeout(() => {
    //   this.titulo = 'Registro del Participante';
    // }, 3000);
  }

  tipeo(evt) {
    // this.correo = evt.target.value;
    // console.log(evt);
    // console.log(evt.data);
    // console.log(evt.target.value);
  }

  ngOnInit() {
    this.grupo = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      contrasena: new FormControl(null, Validators.required),
    });
  }

  conversion(obj) {
    return JSON.stringify(obj);
  }

  registroParticipante() {
    console.log(this.grupo);
    if (this.grupo.valid) {
      console.log('El formulario es válido');
      console.log(this.grupo.value) ;
      console.log(this.grupo.getRawValue())
    } else {
      console.log('El formulario es inválido');
    }
  }

}
