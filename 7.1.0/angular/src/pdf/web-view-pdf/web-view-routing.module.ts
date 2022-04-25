import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {WebViewComponent} from './web-view.component'
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', 
                component: WebViewComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class WebViewRoutingModule { }
