import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../../../apps/wkmg/src/environments/environment';
import {catchError} from 'rxjs/operators';
import {SessionService} from '@wkmg/commons/services';

@Injectable()
export class HttpHandlerInterceptor implements HttpInterceptor {

  constructor(private session: SessionService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let setHeaders = {};
    let url = '';

    if (!req.url.includes('i18n')) {
      url = `${environment.API_URL}/${req.url}`;
    }

    if (this.session.token) {
      setHeaders = {
        Authorization: `Bearer ${this.session.token}`
      };
    }

    const request = req.clone({
      url,
      setHeaders
    });

    return next.handle(request)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return throwError(err);
        })
      );
  }

}
