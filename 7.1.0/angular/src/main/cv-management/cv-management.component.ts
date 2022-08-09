import { Component, Injector, OnInit, TemplateRef } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AppComponentBase } from '@shared/app-component-base';
import { Observable } from 'rxjs';
import { TemplateService } from 'services/template.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cv-management',
  templateUrl: './cv-management.component.html',
  styleUrls: ['./cv-management.component.scss'],
  animations: [appModuleAnimation()]
})
export class CvManagementComponent extends AppComponentBase implements OnInit {

  modalRef: BsModalRef;
  cvId: number;
  constructor(injector: Injector,
    private templateService: TemplateService,
    private modalService: BsModalService,) {
    super(injector);
  }
  allTemplate!: Observable<any[]>;
  ngOnInit(): void {
    this.generateData();
  }
  generateData() {
    this.templateService.getAllTemplate().subscribe((res: any) => {
      this.allTemplate = res.result.items;
      console.log(this.allTemplate);
    });
  }
  openModal(template: TemplateRef<any>, id: number) {
    this.cvId = id;
    this.modalRef = this.modalService.show(template, { class: 'modal-dialog-centered' });
}
  delete(){
    this.modalRef.hide();
    this.message.success("Xóa bản ghi thành công", "Thông báo xóa");
  }
}
