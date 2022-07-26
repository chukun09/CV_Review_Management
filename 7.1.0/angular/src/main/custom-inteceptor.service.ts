import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
import { catchError } from 'rxjs/operators';
import { MessageService, NotifyService } from 'abp-ng2-module';
import { AppConsts } from '@shared/AppConsts';
@Injectable()
export class CustomInteceptorService implements HttpInterceptor {
    constructor(private notifyService: MessageService,
    ) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse && error.status === 401 || !localStorage.getItem("userId")) {
                setTimeout(this.notifyService.error("Phiên đăng nhập đã hết hiệu lực, vui lòng đăng nhập lại!"), 3000);
                abp.auth.clearToken();
                abp.utils.deleteCookie(AppConsts.authorization.encryptedAuthTokenName);
               location.href = AppConsts.appBaseUrl;
                return throwError(error);
            }
        })
        )
    }
}