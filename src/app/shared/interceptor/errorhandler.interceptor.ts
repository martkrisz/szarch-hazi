import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

let FALLBACK_ERROR_MSG;

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {
    const translateService: TranslateService = this.injector.get(TranslateService);
    translateService.get('error.fallback').subscribe(errorMsg => (FALLBACK_ERROR_MSG = errorMsg));
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const toastrService: ToastrService = this.injector.get(ToastrService);
    const translateService: TranslateService = this.injector.get(TranslateService);

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            const { error } = err;

            if (error && error.errorDescriptions && error.errorDescriptions.length) {
              if (error.errorDescriptions[0].errorKey === 'error.not_yet_activated') {
                return;
              }
            } else {
              toastrService.error(FALLBACK_ERROR_MSG);
            }
          }
        }
      )
    );
  }
}
