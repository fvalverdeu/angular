import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees1.json"

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
    .pipe(catchError(error => this.errorHandler(error)));
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw('error');
  }
}
