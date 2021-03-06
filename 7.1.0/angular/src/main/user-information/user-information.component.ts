import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AppComponentBase } from '@shared/app-component-base';
import { UserInformationService } from '../../services/user-information.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css'],
  animations: [appModuleAnimation()]
})
export class UserInformationComponent extends AppComponentBase implements OnInit {
  userInformation: any;
  userLogin: any;
  fullName: any;
  maxDate: Date;
  submitted = false;
  constructor(injector: Injector,
    private userInformationService: UserInformationService,
  ) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    this.userLogin = this.appSession.user;
    (await this.userInformationService.getUserInformationByUserId(this.userLogin.id)).subscribe((response) => {
      console.log(this.userLogin.id);
      this.userInformation = response.result;
      this.fullName = this.userInformation.firstName + " " + this.userInformation.lastName;
    });
    this.maxDate = new Date();
  }

}
