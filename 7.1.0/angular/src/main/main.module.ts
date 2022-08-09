import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ServiceProxyModule } from '../shared/service-proxies/service-proxy.module';
import { SharedModule } from '../shared/shared.module';
// tenants
import { TenantsComponent } from '../app/tenants/tenants.component';
import { CreateTenantDialogComponent } from '../app/tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from '../app/tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '../app/roles/roles.component';
import { CreateRoleDialogComponent } from '../app/roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from '../app/roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '../app/users/users.component';
import { CreateUserDialogComponent } from '../app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '../app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from '../app/users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from '../app/users/reset-password/reset-password.component';
// layout
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { SelectTemplateModule } from './select-template/select-template.module';
import { AllCvComponent } from './all-cv/all-cv.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RatingModule } from 'ngx-bootstrap/rating';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// Component
import {WebViewComponent} from './web-view-pdf/web-view.component'
import { WebViewComponentModule } from './web-view-pdf/web-view.module';
import { UserInformationComponent } from './user-information/user-information.component';
import { CreateCvComponent } from './create-cv/create-cv.component';
import { BaseTemplateComponent } from './create-cv/base-template/base-template.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { BaseTemplateModule } from './create-cv/base-template/base-template.module';
import { NgxDynamicContentModule } from 'ngx-dynamic-content';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CvManagementComponent } from './cv-management/cv-management.component';
import { AbpHttpInterceptor } from 'abp-ng2-module';
import { CVInformationService } from 'services/cv-information.service';
import {CustomInteceptorService} from 'main/custom-inteceptor.service'
@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    AllCvComponent,
    UserInformationComponent,
    CreateCvComponent,
    ResetPasswordComponent,
    CvManagementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxDynamicContentModule.forRoot({imports:[CommonModule, BrowserModule, SharedModule, FontAwesomeModule]}),
    BsDropdownModule,
    CollapseModule,
    TabsModule,
    MainRoutingModule,
    ServiceProxyModule,
    SharedModule,
    BaseTemplateModule,
    NgxPaginationModule,
    SelectTemplateModule,
    NgSelectModule,
    RatingModule,
    WebViewComponentModule,
  ],
  providers: [
    CVInformationService,
    { provide: HTTP_INTERCEPTORS, useClass: CustomInteceptorService, multi: true },
    
  ],
  entryComponents: [

  ],
})
export class MainModule {}
