import { Component, Injector, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { TemplateService } from '../../../services/template.service';
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BaseTemplateComponent extends AppComponentBase implements OnInit {
  templateHTML: any;
  imgTemplate: any;
  test: false;
  templateId: any;
  @Input() dataCV: any;
  constructor(injector: Injector, private templateService: TemplateService,
    private sanitizer:DomSanitizer) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    (await this.templateService.getTemplateById(1)).subscribe((res) => {
      this.templateHTML = res.result.templateURL;
      this.imgTemplate = res.result.imageURL;
      this.templateId = res.result.id;
    })
    // this.templateHTML = this.sanitizer.bypassSecurityTrustStyle(this.templateHTML);
  }

}
