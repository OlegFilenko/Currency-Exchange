import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const request = req.clone({
      setHeaders: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
        'origin': 'https://api.privatbank.ua/',
        'referer': 'https://api.privatbank.ua/',
        'access-control-allow-methods': 'get, post, options, put, patch, delete',
        'access-control-allow-credentials': 'true'
      }
    });
    return next.handle(request);
  }
}
