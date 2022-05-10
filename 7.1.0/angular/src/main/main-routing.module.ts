import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllCvComponent } from './all-cv/all-cv.component';
import { MainComponent } from './main.component';
import { SelectTemplateComponent } from './select-template/select-template.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: MainComponent,
            children: [
            { path: 'select-template', component: SelectTemplateComponent, loadChildren: () => import('./select-template/select-template.module').then(m => m.SelectTemplateModule) },
            { path: 'all-cv', component: AllCvComponent }
            ],
        }
        ])
    ],
    exports: [RouterModule]
})
export class MainRoutingModule { }
