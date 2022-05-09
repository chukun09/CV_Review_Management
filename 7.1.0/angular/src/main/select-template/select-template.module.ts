import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectTemplateRoutingModule } from './select-template-routing.module';
import { SelectTemplateComponent } from './select-template.component';


@NgModule({
  declarations: [
    SelectTemplateComponent
  ],
  exports: [
    SelectTemplateComponent,
  ],
  imports: [
    CommonModule,
    SelectTemplateRoutingModule
  ]
})
export class SelectTemplateModule { }
