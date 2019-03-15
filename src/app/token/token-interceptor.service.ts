import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../loginService/login.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class TokenInterceptorService implements HttpInterceptor {
  constructor(public auth: LoginService, private cookieService: CookieService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.cookieService.get('jwtToken')) {
      req = req.clone(
        {
          setHeaders:
          {
            'Authorization':  this.cookieService.get('jwtToken')
          }
        }
      );
      console.log("{ 'Authorization':" + this.cookieService.get('jwtToken')+ ", 'Content-Type': 'application/json'}")
    }
    return next.handle(req).pipe(catchError((error, caught) => { 
      console.log(error);
      this.handleAuthError(error);
      return of(error);
    }) as any);
  }
  private handleAuthError(err: HttpErrorResponse): Observable<any> {

    if (err.status === 401) {

      console.log('handled error ' + err.status);

      return of(err.message);
    }
    throw err;
  }
}