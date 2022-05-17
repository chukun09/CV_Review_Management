import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AppComponentBase } from '@shared/app-component-base';
import {jsPDF} from "jspdf";
@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css'],
  animations: [appModuleAnimation()]
})
export class CreateCvComponent extends AppComponentBase implements OnInit {
  @ViewChild('cv', {static: false}) el!: ElementRef;
  test : any;
  constructor(injector: Injector) {
    super(injector);
    this.test = require('html-loader!../../assets/template/test.html');
    this.test = this.test.default;
  }

  ngOnInit(): void {
  }
  downloadPDFbyHTML(){
    let date:number = new Date().getTime();
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf)=>{
        pdf.save("cv_" + date + ".pdf");
      }
    });
  }
}
