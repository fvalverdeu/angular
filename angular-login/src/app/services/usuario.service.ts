import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url = 'http://localhost:3000/usuarios/login';

  constructor(private http: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
  
  login(correo: string, contrasenia: string): Observable<any> {
    console.log(correo);
    return this.http
      .post(this.url, {correo, contrasenia}, {headers: this.headers})
      //.post(this.url, {correo, contrasenia})
      .pipe(map(data => data));
  }
}