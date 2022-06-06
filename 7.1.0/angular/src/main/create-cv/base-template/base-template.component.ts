import { Component, Injector, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { TemplateService } from '../../../services/template.service';
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BaseTemplateComponent extends AppComponentBase implements OnInit {
  templateHTML: any;
  styleUrl: any;
  @Input() dataCV: any;
  constructor(injector: Injector, private templateService: TemplateService,
    private sanitizer:DomSanitizer) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    (await this.templateService.getTemplateById(1)).subscribe((res) => {
      this.templateHTML = res.result.templateURL;
      this.styleUrl = res.result.styleURL;
    })
    // this.templateHTML = this.sanitizer.bypassSecurityTrustStyle(this.templateHTML);
  }

}
