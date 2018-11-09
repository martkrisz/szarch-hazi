import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
  private toastrService: ToastrService;
  private translateService: TranslateService;

  constructor(private injector: Injector) {
    setTimeout(() => {
      this.toastrService = injector.get(ToastrService);
      this.translateService = injector.get(TranslateService);
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            const indexOfApi = request.url.indexOf('api');
            const translateKey = `${request.method}.${request.url.slice(indexOfApi).replace(/\//g, '.').split('?')[0]}`;
            if (this.translateService && this.toastrService) {
              this.translateService
                .get(translateKey)
                .pipe(filter(resp => translateKey !== resp))
                .subscribe(translatedText => this.toastrService.success(translatedText));
            }
          }
        },
        (err: any) => {}
      )
    );
  }
}
