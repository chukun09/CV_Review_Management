import {
  ChangeDetectorRef,
  Component,
  Injector,
  Input,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { AppComponentBase } from "@shared/app-component-base";
import { TemplateService } from "../../../services/template.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-base-template",
  templateUrl: "./base-template.component.html",
  styleUrls: ["./base-template.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class BaseTemplateComponent extends AppComponentBase implements OnInit {
  templateHTML: any;
  imgTemplate: any;
  templateId: any;
  templateName: any;
  userId: any;
  cvId: any;
  @Input() dataCV: any;
  @Input() teamplateId: any;
  @Input() address: any;
  constructor(
    injector: Injector,
    private templateService: TemplateService,
    private route: ActivatedRoute,
  ) {
    super(injector);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.cvId = params["id"];
      this.userId = params["userId"];
    });
    if (this.userId) {
      setTimeout(() => {this.cvId = this.teamplateId;}, 1000);
    } else if (!this.cvId) {
      this.cvId = 1;
    }
    setTimeout(() => {this.templateService.getTemplateById(this.cvId).subscribe((res) => {
      this.templateHTML = res.result.templateURL;
      this.imgTemplate = res.result.imageURL;
      this.templateId = res.result.id;
      this.templateName = res.result.name;
    });}, 1000);
    // this.templateHTML = this.sanitizer.bypassSecurityTrustStyle(this.templateHTML);
  }
}
