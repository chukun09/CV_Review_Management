import { ChangeDetectionStrategy, Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AppComponentBase } from '@shared/app-component-base';
import { Observable } from 'rxjs';
import { TemplateService } from 'services/template.service';
import {Image} from './image';
@Component({
  selector: 'app-select-template',
  templateUrl: './select-template.component.html',
  styleUrls: ['./select-template.component.css'],
  animations: [appModuleAnimation()],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectTemplateComponent extends AppComponentBase implements OnInit  {

  constructor(injector: Injector,
    private templateService: TemplateService) {
    super(injector);
  }
  allTemplate!: Observable<Image[]>;
    ngOnInit() {
     this.generateData();
  }
   generateData(){
    this.templateService.getAllTemplate().subscribe((res : any) =>{
      this.allTemplate = res.result.items;
      console.log(this.allTemplate);
    });
  }

  
  // routerToCreateCV(){
  //   console.log(this.route.parent);
  // }

}
