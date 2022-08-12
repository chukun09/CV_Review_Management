import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { appModuleAnimation } from './../../shared/animations/routerTransition';
import PSPDFKit, { Instance } from 'pspdfkit';
import { WebViewService } from '../../services/web-view.service'
import { AppComponentBase } from '@shared/app-component-base';
import { UserInformationService } from 'services/user-information.service';
import { Location } from '@angular/common';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { environment } from 'environments/environment';
import { CVInformationService } from 'services/cv-information.service';
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
  userId: any;
  fullName: string;
  // SignalR
  private hubConnection: HubConnection;
  // -------------SignalR Service-------------
  public startConnection = () => {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:44311/annotation')
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }
  public addTransferChartDataListener = () => {
    this.hubConnection.on('boardcastannotation', () => {
      // this.data = data;
      PSPDFKit.unload(this.instanceNew);
      this.initialState();
      // console.log(data);
    });
  }
  constructor(private webViewService: WebViewService,
    private _router: Router,
    private userInformationService: UserInformationService,
    private cvService: CVInformationService,
    private route: ActivatedRoute,
    private _location: Location,
    injector: Injector) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
      this.userId = params["userId"];
    });
    this.userLogin = this.appSession.user;
    (this.userInformationService.getUserInformationByUserId(this.userLogin.id)).subscribe((response) => {
      this.userInformation = response.result;
      this.fullName = this.userInformation.firstName + ' ' + this.userInformation.lastName;
    });
    this.startConnection();
    this.addTransferChartDataListener();
    this.initialState();

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
    this.message.success("Cảm ơn bạn đã góp ý, đóng góp của bạn đã được ghi nhận !");
    setTimeout(() => {this._router.navigate(['/main/all-cv']);}, 2000);
  }
  async cancelEdit() {
    this._location.back();
  }
  async initialState() {
    var instantJSON: any;
    var instant: any;
    var pdfPath : any;
    let response = await this.webViewService.getJsonPDFbyCVId(this.id);
    let responsePDF = await this.cvService.getDetailCVById(this.id);
    response.toPromise().then((data) => {
      instantJSON = data.result;
      instantJSON = JSON.parse(instantJSON);
      instant = {
        annotations: instantJSON?.annotations,
        format: instantJSON?.format
      };
      const item: any = [{
        type: "custom",
        id: "save-button",
        title: "Save",
        onPress: () => {
          this.saveFilePDF();
        }
      }, {
        type: "custom",
        id: "cancel-button",
        title: "Cancel",
        onPress: () => {
          this.cancelEdit();
        }
      }];
      responsePDF.toPromise().then((res) => {
        pdfPath = res.result.pdfFile;
        if(!pdfPath){
          this.message.error("Vui lòng kiểm tra lại, không tìm thấy file !", "Lỗi File");
          setTimeout(() =>{this._router.navigate(['/main/all-cv']);}, 1000);
          return;
        }
        PSPDFKit.load({
          // Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
          baseUrl: location.protocol + "//" + location.host + "/assets/",
          instantJSON: instantJSON,
          document: environment.BASE_PDF_URL + pdfPath,
          container: "#pspdfkit-container",
          toolbarItems: PSPDFKit.defaultToolbarItems.concat(item),
          // autoSaveMode: PSPDFKit.AutoSaveMode.INTELLIGENT,
          isEditableAnnotation: (annotation) => annotation.creatorName === this.fullName + "_" + this.id || this.userId,
          // initialViewState: new PSPDFKit.ViewState({ readOnly: true })
          
        }).then(async instance => {
          (window as any).instance = instance;
          instance.setAnnotationCreatorName(this.fullName + "_" + this.id);
          this.instanceNew = instance;
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
      }, error => {
        this.message.error("Vui lòng kiểm tra lại URL, không thể tìm thấy CV !", "Lỗi đường dẫn");
        console.log(error);
        this._router.navigate(['/main/all-cv']);
      });
      })
  }
}
