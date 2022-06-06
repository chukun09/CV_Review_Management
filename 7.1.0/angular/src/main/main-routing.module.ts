import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { AllCvComponent } from './all-cv/all-cv.component';
import { CreateCvComponent } from './create-cv/create-cv.component';
import { MainComponent } from './main.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SelectTemplateComponent } from './select-template/select-template.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { WebViewComponent } from './web-view-pdf/web-view.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: MainComponent,
                children: [
                    { path: 'select-template', loadChildren: () => import('./select-template/select-template.module').then(m => m.SelectTemplateModule), data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    { path: 'all-cv', component: AllCvComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    {
                        path: 'user-information/:id',
                        component: UserInformationComponent,
                        data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard]
                    },
                    { path: 'reset-password', component: ResetPasswordComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] }
                ],
            },
            {
                path: 'web-view/:id',
                loadChildren: () => import('./web-view-pdf/web-view.module').then(m => m.WebViewComponentModule),
                data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard]
            },
            {
                path: 'create-cv',
                loadChildren: () => import('./create-cv/base-template/base-template.module').then(m => m.BaseTemplateModule),
                component: CreateCvComponent,
                data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard]
            }
        ])
    ],
    exports: [RouterModule]
})
export class MainRoutingModule { }
