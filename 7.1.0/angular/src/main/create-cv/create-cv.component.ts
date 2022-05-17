import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
  userLogin: any;
  title:any;
  constructor(injector: Injector,
    private titleService: Title) {
    super(injector);
    this.test = require('html-loader!../../assets/template/test.html');
    this.test = this.test.default;
  }

  ngOnInit(): void {
    this.userLogin = this.appSession.user;
    this.setTitle("CV " + this.userLogin.name + " " + this.userLogin.surname);
  }
  downloadPDFbyHTML(){
    let date:number = new Date().getTime();
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf)=>{
        pdf.save( this.title + "_" + date + ".pdf");
      }
    });
  }
  public setTitle(newTitle: string) {
    this.title = newTitle;
    this.titleService.setTitle(newTitle + "| CVRM");
  }
}
