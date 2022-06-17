import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {BaseTemplateComponent} from './base-template.component'
import { NgxDynamicContentModule } from 'ngx-dynamic-content';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [
    BaseTemplateComponent
  ],
  exports: [
    BaseTemplateComponent
  ],
  providers: [DatePipe, CommonModule,FontAwesomeModule, SharedModule],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    NgxDynamicContentModule,
  ]
})
export class BaseTemplateModule { }
