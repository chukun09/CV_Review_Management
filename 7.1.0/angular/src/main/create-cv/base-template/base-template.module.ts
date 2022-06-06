import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseTemplateComponent} from './base-template.component'
import { NgxDynamicContentModule } from 'ngx-dynamic-content';

@NgModule({
  declarations: [
    BaseTemplateComponent
  ],
  exports: [
    BaseTemplateComponent
  ],
  imports: [
    CommonModule,
    NgxDynamicContentModule
  ]
})
export class BaseTemplateModule { }
