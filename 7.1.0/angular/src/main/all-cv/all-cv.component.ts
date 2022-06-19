import { ChangeDetectionStrategy, Component, Injector, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AppComponentBase } from '@shared/app-component-base';
import {CVInformationService} from '../../services/cv-information.service';
@Component({
  selector: 'app-all-cv',
  animations: [appModuleAnimation()],
  templateUrl: './all-cv.component.html',
  styleUrls: ['./all-cv.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllCvComponent extends AppComponentBase implements OnInit {
  like:boolean = true;
  listCV: any;
  // SignalR
  private hubConnection: HubConnection;
  // -------------SignalR Service-------------
  public startConnection = () => {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:44311/like')
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }
  public addTransferChartDataListener = () => {
    this.hubConnection.on('boardcasttooglelike', () => {
      // this.data = data;
      this.loadListCV();
      // console.log(data);
    });
  }
  constructor(injector : Injector, 
    private cVInformationService: CVInformationService) {
    super(injector);
  }

  ngOnInit(): void {
    this.loadListCV();
    this.startConnection();
    this.addTransferChartDataListener();
  }
  updateLikeStatus(cvId){
    this.cVInformationService.toogleLikeCV(localStorage.getItem('userId'), cvId).subscribe((res) => {
      if(!res.success){
        this.message.error("Có lỗi xảy ra vui lòng thử lại sau");
      }
    })
  }
  loadListCV(){
    this.cVInformationService.getCVInformationByUserId(localStorage.getItem('userId')).subscribe((res) => {
      this.listCV = res.result;
    });
  }
}
