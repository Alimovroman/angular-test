import { Injectable } from '@angular/core'
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http'

import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

/** Pass untouched request through to the next request handler. */
@Injectable()
export class CredentialInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      headers: new HttpHeaders().append('api-key', environment.apiKey),
      withCredentials: true,
    })
    return next.handle(request)
  }
}
