import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { FAKE_PRODUCTS } from '../responses/products';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/products') && method === 'GET':
          return ok(FAKE_PRODUCTS);
        case url.endsWith('/payment') && method === 'POST':
          return Math.random() >= 0.5 ? ok(true) : error();
        default:
          return next.handle(request);
      }
    }

    function ok(response: any) {
      return of(new HttpResponse({ status: 200, body: response }));
    }

    function error() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }
  }
}
