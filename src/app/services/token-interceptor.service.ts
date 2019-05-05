import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private tokenService: TokenService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = request;
        const tokenValue = this.tokenService.getToken();
        if (tokenValue != null) {
            authReq = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + tokenValue) });
        }
        return next.handle(authReq);
    return next.handle(request);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
];
