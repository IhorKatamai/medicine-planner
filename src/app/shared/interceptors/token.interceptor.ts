import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('accessToken');
    const googleToken = localStorage.getItem('googleToken');

    if (accessToken && googleToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
          GoogleToken: googleToken,
          'Accept-Language': 'en-GB',
        }
      });
    }

    return next.handle(request);
  }
}
