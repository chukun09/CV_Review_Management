import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectTemplateComponent } from './select-template.component';

const routes: Routes = [{ path: '', component: SelectTemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectTemplateRoutingModule { }
