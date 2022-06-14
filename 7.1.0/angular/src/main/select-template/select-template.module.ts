import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectTemplateRoutingModule } from './select-template-routing.module';
import { SelectTemplateComponent } from './select-template.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    SelectTemplateComponent
  ],
  exports: [
    SelectTemplateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SelectTemplateModule { }
