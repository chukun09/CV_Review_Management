import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import {WebViewComponent} from './web-view.component'
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', 
                component: WebViewComponent
            },
            { 
                path: ':userId', 
                component: WebViewComponent,
                canActivate: [AppRouteGuard]
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class WebViewRoutingModule { }
