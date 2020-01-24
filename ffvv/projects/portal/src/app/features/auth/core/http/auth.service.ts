import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(
    credentials: { username: string, password: string, app: string, country: string, role: string }
  ): Observable<{type: number, detail: { accessToken: string }}> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<{type: number, detail: { accessToken: string }}>('auth/login', credentials, httpOptions);
  }

  signInAdm(
    credentials: { country: string, region: string, zone: string, section: string, password: string }
  ): Observable<{type: number, detail: { accessToken: string }}> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(credentials);
    return this.http.post<{type: number, detail: { accessToken: string }}>('auth/login_support', credentials, httpOptions);
  }
}
