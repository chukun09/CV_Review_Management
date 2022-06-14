import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {BaseTemplateComponent} from './base-template.component'
import { NgxDynamicContentModule } from 'ngx-dynamic-content';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    BaseTemplateComponent
  ],
  exports: [
    BaseTemplateComponent
  ],
  providers: [DatePipe, CommonModule,FontAwesomeModule],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    NgxDynamicContentModule,
  ]
})
export class BaseTemplateModule { }
