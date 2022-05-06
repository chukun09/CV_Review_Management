import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import PSPDFKit from 'pspdfkit';
import { WebViewService } from './../../../services/web-view.service'
@Component({
  selector: 'web-view',
  templateUrl: './web-view.component.html',
  animations: [appModuleAnimation()],
  styleUrls: ['./web-view.component.css']
})

export class WebViewComponent implements OnInit {
  instanceNew: any;
  constructor(private webViewService: WebViewService,
    private _router: Router) {
  }

  async ngOnInit(): Promise<void> {
    var instantJSON: any;
    var instant: any;
    let response = await this.webViewService.getJsonPDF();
    response.subscribe((data) => {
      instantJSON = data.result.jsonPDF;
      instantJSON = JSON.parse(instantJSON);
      instant = {
        annotations: instantJSON.annotations,
        format: instantJSON.format
      };
      console.log(instant.annotations)
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
        // initialViewState: new PSPDFKit.ViewState({ readOnly: true })
      }).then(async instance => {
        (window as any).instance = instance;
        instance.setAnnotationCreatorName("Long");
        // this.instanceNew = instance;
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
      cvId: 11
    }
    this.webViewService.addNewAnnotation(annotations).subscribe(res => {
      console.log(res);
    });
    this._router.navigate(['/app/about']);
  }
}
