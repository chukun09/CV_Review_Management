import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {BaseTemplateComponent} from './base-template.component'
import { NgxDynamicContentModule } from 'ngx-dynamic-content';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
@NgModule({
  declarations: [
    BaseTemplateComponent
  ],
  exports: [
    BaseTemplateComponent
  ],
  providers: [DatePipe, CommonModule, RatingModule],
  imports: [
    CommonModule,
    FormsModule,
    NgxDynamicContentModule,
    RatingModule.forRoot()
  ]
})
export class BaseTemplateModule { }
