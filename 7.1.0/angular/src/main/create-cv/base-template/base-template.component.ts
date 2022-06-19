import { Component, Injector, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { TemplateService } from '../../../services/template.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BaseTemplateComponent extends AppComponentBase implements OnInit {
  templateHTML: any;
  imgTemplate: any;
  templateId: any;
  templateName: any;
  cvId: any;
  @Input() dataCV: any;
  constructor(injector: Injector, 
    private templateService: TemplateService,
    private route: ActivatedRoute) {
    super(injector);
  }

   ngOnInit(){
    this.route.params.subscribe((params) => {
      this.cvId = params["id"];
    });
    if(!this.cvId){
      this.cvId = 1;
    }
    (this.templateService.getTemplateById(this.cvId)).subscribe((res) => {
      this.templateHTML = res.result.templateURL;
      this.imgTemplate = res.result.imageURL;
      this.templateId = res.result.id;
      this.templateName = res.result.name;
    })
    // this.templateHTML = this.sanitizer.bypassSecurityTrustStyle(this.templateHTML);
  }

}
