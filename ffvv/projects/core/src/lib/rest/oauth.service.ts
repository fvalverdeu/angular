import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../../portal/src/environments/environment';

@Injectable()
export class OauthService {
  oauth = {
    user: environment.OAUTH.USER,
    pwd: environment.OAUTH.PWD
  };

  constructor(private http: HttpClient) { }

  generateOAuthToken(): Observable<{access_token: string}> {
    const b64String = btoa(`${this.oauth.user}:${this.oauth.pwd}`);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        Authorization: `Basic ${b64String}`
      })
    };
    const params = new HttpParams().set('grant_type', 'client_credentials');
    // const url = `${environment.ENDPOINTS.API_URL}/oauth/token`;
    return this.http.post<{access_token: string}>('oauth/token', params, httpOptions); // {grant_type: 'client_credentials'}
  }
}
