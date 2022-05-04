import { Component, OnInit } from '@angular/core';
import PSPDFKit from 'pspdfkit';
import { WebViewService } from './../../../services/web-view.service'
@Component({
  selector: 'web-view',
  templateUrl: './web-view.component.html',
  styleUrls: ['./web-view.component.css']
})

export class WebViewComponent implements OnInit {


  constructor(private webViewService: WebViewService) {
  }

  async ngOnInit(): Promise<void> {
    var instantJSON: any;
    var instant: any;
    let response = await this.webViewService.getJsonPDF();
     response.subscribe( (data) => {
      instantJSON =  data.result.jsonPDF;
      instantJSON =  JSON.parse(instantJSON);
      debugger
      instant = {
        annotations: instantJSON.annotations,
        format: instantJSON.format
      };
      console.log(instant.annotations)
      PSPDFKit.load({
        // Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: location.protocol + "//" + location.host + "/assets/",
        instantJSON: instantJSON,
        document: "./../../../assets/pdf/webviewer-demo-annotated.pdf",
        container: "#pspdfkit-container",
        autoSaveMode: PSPDFKit.AutoSaveMode.INTELLIGENT
      }).then(instance => {
        (window as any).instance = instance;
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

}