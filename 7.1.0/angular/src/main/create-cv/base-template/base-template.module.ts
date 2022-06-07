import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {BaseTemplateComponent} from './base-template.component'
import { NgxDynamicContentModule } from 'ngx-dynamic-content';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BaseTemplateComponent
  ],
  exports: [
    BaseTemplateComponent
  ],
  providers: [DatePipe, CommonModule],
  imports: [
    CommonModule,
    FormsModule,
    NgxDynamicContentModule
  ]
})
export class BaseTemplateModule { }
