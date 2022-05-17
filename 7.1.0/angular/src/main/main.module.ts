import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
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
// Component
import {WebViewComponent} from './web-view-pdf/web-view.component'
import { WebViewComponentModule } from './web-view-pdf/web-view.module';
import { UserInformationComponent } from './user-information/user-information.component';
import { CreateCvComponent } from './create-cv/create-cv.component';

@NgModule({
  declarations: [
    MainComponent,
    // HomeComponent,
    // AboutComponent,
    // // tenants
    // TenantsComponent,
    // CreateTenantDialogComponent,
    // EditTenantDialogComponent,
    // // roles
    // RolesComponent,
    // CreateRoleDialogComponent,
    // EditRoleDialogComponent,
    // // users
    // UsersComponent,
    // CreateUserDialogComponent,
    // EditUserDialogComponent,
    // ChangePasswordComponent,
    // ResetPasswordDialogComponent,
    // layout
    HeaderComponent,
    FooterComponent,
    AllCvComponent,
    UserInformationComponent,
    CreateCvComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalModule.forChild(),
    BsDropdownModule,
    CollapseModule,
    TabsModule,
    MainRoutingModule,
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule,
    SelectTemplateModule,
    NgSelectModule,
    WebViewComponentModule
   
  ],
  providers: [],
  entryComponents: [
    // tenants
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ResetPasswordDialogComponent,
  ],
})
export class MainModule {}
