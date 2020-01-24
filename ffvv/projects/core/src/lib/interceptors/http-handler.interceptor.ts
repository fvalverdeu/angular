import {Injectable, Injector} from '@angular/core';
import {BehaviorSubject, EMPTY} from 'rxjs';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, filter, switchMap, take} from 'rxjs/operators';
import {Router} from '@angular/router';
import {SessionService} from '@portal/core/services';
import {OauthService} from '@portal/core/rest';
import {LogService} from '@portal/core/log';
import {MessageService} from 'primeng/api';
import * as StackTrace from 'stacktrace-js';
import {environment} from '../../../../portal/src/environments/environment';

@Injectable()
export class HttpHandlerInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private oAuthService: OauthService,
    private sessionService: SessionService,
    private router: Router,
    private messageService: MessageService, // PRIMENG
    private injector: Injector
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercepting');
    const tokenOauth = this.sessionService.getOauthToken();
    const request = this.addToken(req, tokenOauth);
    console.log(request);
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${err.status}, ` +
            `body was: ${err.error}`);

          if (err.status === 401) {
            // auto logout if 401 response returned from api
            this.sessionService.clearStorage();
            this.router.navigateByUrl('/auth/sign-in').then(r => {
              if (r) {
                console.log('Navigation is successful!');
              } else {
                console.log('Navigation has failed!');
              }
            });
            return EMPTY;
          } else if (err.status === 403) {
            // token ha expirado y se debe refrescar haciendo una nueva solicitud de token de autorización
            return this.handle403Error(request, next);
          }
        }
        // this.messageService.add({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
        this.logging(err);
        // return an observable with a user-facing error message
        return throwError(err); // 'Something bad happened; please try again later.');
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string) {
    let url = request.url;
    if (!environment.BLACK_LIST.includes(url)) {
      if (!request.url.includes('i18n')) {
        url = `${environment.ENDPOINTS.API_URL}/${request.url}`;
      }
      if (token)  { // && request.url.indexOf('token') === -1
        return request.clone({
          url,
          setHeaders: {
            'x-access-token': `Bearer ${token}`
          }
        });
      }
    }
    return request.clone({ url });
  }

  private handle403Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.oAuthService.generateOAuthToken().pipe(
        switchMap((res: any) => {
          this.isRefreshing = false;
          this.sessionService.setOauthToken(res.access_token);
          this.refreshTokenSubject.next(res.access_token);
          return next.handle(this.addToken(request, res.access_token));
        }));

    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        }));
    }
  }

  private logging(error: any): void {
    console.log('HandleError', error);
    const logService: LogService = this.injector.get(LogService);
    const message = error.message ? error.message : error.toString();

    // if (error.status) { error = new Error(message); }
    error = new Error(message);

    StackTrace.fromError(error).then((stackframes) => {
      const stackString = stackframes
        .splice(0, 10)
        .map(sf => {
          return sf.toString();
        })
        .toString();

      const errorTraceStr = `Error message: ${message}. Stack trace: ${stackString}`;

      logService.logError(errorTraceStr);
    });
  }
}
