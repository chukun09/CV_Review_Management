import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { appModuleAnimation } from './../../shared/animations/routerTransition';
import PSPDFKit from 'pspdfkit';
import { WebViewService } from '../../services/web-view.service'
import { AppComponentBase } from '@shared/app-component-base';
import { UserInformationService } from 'services/user-information.service';
@Component({
  selector: 'web-view',
  templateUrl: './web-view.component.html',
  animations: [appModuleAnimation()],
  styleUrls: ['./web-view.component.css']
})

export class WebViewComponent extends AppComponentBase implements OnInit {
  instanceNew: any;
  userInformation: any;
  userLogin: any;
  id: number;
  fullName: string;
  constructor(private webViewService: WebViewService,
    private _router: Router,
    private userInformationService: UserInformationService,
    private route: ActivatedRoute,
    injector: Injector) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
    });
    var instantJSON: any;
    var instant: any;
    this.userLogin = this.appSession.user;
    (await this.userInformationService.getUserInformationByUserId(this.userLogin.id)).subscribe((response) => {
      this.userInformation = response.result;
      this.fullName = this.userInformation.firstName + ' ' + this.userInformation.lastName;
    });
    let response = await this.webViewService.getJsonPDFbyCVId(this.id);
    response.subscribe((data) => {
      instantJSON = data.result;
      instantJSON = JSON.parse(instantJSON);
      instant = {
        annotations: instantJSON.annotations,
        format: instantJSON.format
      };
      const item: any = {
        type: "custom",
        id: "my-button",
        title: "Save",
        onPress: (event) => {
          this.saveFilePDF();
        }
      };
      PSPDFKit.load({
        // Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: location.protocol + "//" + location.host + "/assets/",
        instantJSON: instantJSON,
        document: "./../../../assets/pdf/webviewer-demo-annotated.pdf",
        container: "#pspdfkit-container",
        toolbarItems: [...PSPDFKit.defaultToolbarItems, item],
        autoSaveMode: PSPDFKit.AutoSaveMode.INTELLIGENT,
        isEditableAnnotation: (annotation) => annotation.creatorName === this.fullName
        // initialViewState: new PSPDFKit.ViewState({ readOnly: true })
      }).then(async instance => {
        (window as any).instance = instance;
        instance.setAnnotationCreatorName(this.fullName);
        this.instanceNew = instance;
        // const arrayBuffer = await instance.exportPDF();
        // const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
        // const formData = new FormData();
        // formData.append("file", blob);
        // console.log(formData);


        // instance.addEventListener("annotations.didSave", async () => {
        //   const instantJSON = await instance.exportInstantJSON();
        //   // This saves the Instant JSON to your server, which in turn stores it in a database.
        //   let annotations = {
        //     jsonPDF: JSON.stringify(instantJSON),
        //     cvId: 11
        //   }
        //   this.webViewService.addNewAnnotation(annotations).subscribe(res => {
        //     console.log(res);
        //   });
        // });
      });
    });
    // const response = await fetch("https://localhost:44311/api/services/app/PDFEntity/getPDFJsonById?id=4");
    // const instantJSON = await response.json();
  }
  async saveFilePDF() {
    const instantJSON = await this.instanceNew.exportInstantJSON();
    let annotations = {
      jsonPDF: JSON.stringify(instantJSON),
      cvId: this.id
    }
    this.webViewService.addNewAnnotation(annotations).subscribe(res => {
      console.log(res);
    });
    this._router.navigate(['/app/about']);
  }
}
