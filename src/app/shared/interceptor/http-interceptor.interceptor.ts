import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private _loaderService:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._loaderService.show();

    console.log(request);

    let newRequest=request.clone({
      headers:request.headers.set("token", `${localStorage.getItem('token')}`)
    })

    return next.handle(newRequest).pipe(
      finalize(() => this._loaderService.hide()),
  );;
  }
}
