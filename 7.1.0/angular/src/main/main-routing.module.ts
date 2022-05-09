import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { SelectTemplateComponent } from './select-template/select-template.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: MainComponent,
            children: [
            { path: 'select-template', component: SelectTemplateComponent, loadChildren: () => import('./select-template/select-template.module').then(m => m.SelectTemplateModule) }
            ],
        }
        ])
    ],
    exports: [RouterModule]
})
export class MainRoutingModule { }
