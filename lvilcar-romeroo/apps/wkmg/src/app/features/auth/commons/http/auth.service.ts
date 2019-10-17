import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {
  endpoind = 'auth';

  constructor(private http: HttpClient) {
  }

  signIn(credentials: { email: string, password: string }): Observable<{token: string}> {
    return this.http.post<{token: string}>( `${this.endpoind}/sign-in`, credentials);
  }

  signUp(credentials: { email: string, password: string }) {
    return this.http.get('assets/mock-db/products.js');
  }
}
