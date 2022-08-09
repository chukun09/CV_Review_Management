import { Component, Injector, OnInit, TemplateRef } from "@angular/core";
import { appModuleAnimation } from "@shared/animations/routerTransition";
import { AppComponentBase } from "@shared/app-component-base";
import { Observable } from "rxjs";
import { TemplateService } from "services/template.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { CVInformationService } from "services/cv-information.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cv-management",
  templateUrl: "./cv-management.component.html",
  styleUrls: ["./cv-management.component.scss"],
  animations: [appModuleAnimation()],
})
export class CvManagementComponent extends AppComponentBase implements OnInit {
  modalRef: BsModalRef;
  userId: number;
  cvId: number;
  constructor(
    injector: Injector,
    private templateService: TemplateService,
    private cvInformationService: CVInformationService,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) {
    super(injector);
  }
  allCV!: Observable<any[]>;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params["id"];
    });
    this.generateData();
  }
  generateData() {
    this.cvInformationService
      .getCVInformationByUserId(this.userId)
      .subscribe((res: any) => {
        this.allCV = res.result;
        console.log(this.allCV);
      });
  }
  openModal(template: TemplateRef<any>, id: number) {
    this.cvId = id;
    this.modalRef = this.modalService.show(template, {
      class: "modal-dialog-centered",
    });
  }
  delete() {
    this.cvInformationService
      .deleteCV(this.cvId)
      .toPromise()
      .then((res) => {
        if (res.success) {
          this.modalRef.hide();
          this.message.success("Xóa bản ghi thành công", "Thông báo xóa");
          this.generateData();
        } else this.message.error("Có lỗi xảy ra");
      })
      .catch((err) => {
        this.message.error(err);
      });
  }
}
