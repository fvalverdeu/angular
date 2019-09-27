import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  private usuario: Usuario = {
    correo: "",
    contrasenia: "",
    nombre_completo: ""
  }
  constructor(private usuarioService: UsuarioService) {}
  ngOnInit(){}
  login() {
    console.log(this.usuario.correo + ' ' + this.usuario.contrasenia);
    return this.usuarioService
      .login(this.usuario.correo, this.usuario.contrasenia)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );
  }
}