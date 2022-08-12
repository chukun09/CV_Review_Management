import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
} from "@angular/core";
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
import { appModuleAnimation } from "@shared/animations/routerTransition";
import { AppComponentBase } from "@shared/app-component-base";
import { Subject } from "rxjs/internal/Subject";
import { Subscription } from "rxjs/internal/Subscription";
import { finalize } from "rxjs/operators";
import { CVInformationService } from "../../services/cv-information.service";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-all-cv",
  animations: [appModuleAnimation()],
  templateUrl: "./all-cv.component.html",
  styleUrls: ["./all-cv.component.scss"],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllCvComponent extends AppComponentBase implements OnInit {
  like: boolean = true;
  listCV: any;
  searchKey: string = "";
  txtEmpty: string;
  selectedProjectTypeId: number = 0;
  public notesModelChanged: Subject<string> = new Subject<string>();
  private notesModelChangeSubscription: Subscription;
  filterField = [
    { name: "Họ và tên", id: 1 },
    { name: "Email", id: 2 },
    { name: "Số điện thoại", id: 3 },
    { name: "Tiêu đề", id: 4 },
    { name: "Mã mẫu CV", id: 5 },
  ];
  // SignalR
  private hubConnection: HubConnection;
  // -------------SignalR Service-------------
  public startConnection = () => {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:44311/like")
      .build();
    this.hubConnection
      .start()
      .then(() => console.log("Connection started"))
      .catch((err) => console.log("Error while starting connection: " + err));
  };
  public addTransferChartDataListener = () => {
    this.hubConnection.on("boardcasttooglelike", () => {
      // this.data = data;
      this.loadListCV();
      // console.log(data);
    });
  };
  constructor(
    injector: Injector,
    private cVInformationService: CVInformationService,
    private SpinnerService: NgxSpinnerService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.loadListCV();
    this.startConnection();
    this.addTransferChartDataListener();
    this.notesModelChangeSubscription = this.notesModelChanged
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((newText) => {
        this.searchKey = newText;
        this.loadListCV();
        if (!this.listCV.length) {
          this.txtEmpty = "Không có CV nào được tìm thấy";
        } else {
          this.txtEmpty = "";
        }
      });
  }
  projectTypeChange() {
    if (this.searchKey && this.searchKey.trim()) {
      this.loadListCV();
    } else return;
  }
  updateLikeStatus(cvId) {
    this.cVInformationService
      .toogleLikeCV(localStorage.getItem("userId"), cvId)
      .subscribe((res) => {
        if (!res.success) {
          this.message.error("Có lỗi xảy ra vui lòng thử lại sau");
        }
      });
  }
  loadListCV() {
    this.SpinnerService.show();
    this.cVInformationService
      .getAllCVDataByPage(localStorage.getItem("userId") ,this.searchKey, this.selectedProjectTypeId ? this.selectedProjectTypeId : 0)
      .subscribe((res) => {
        this.listCV = res.result.items;
        this.SpinnerService.hide();
        console.log(this.listCV);
        if (!this.listCV.length) {
          this.txtEmpty = "Không có CV nào được tìm thấy";
        } else {
          this.txtEmpty = "";
        }
      });
  }
}
