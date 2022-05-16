import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AppComponentBase } from '@shared/app-component-base';
import {
  AccountServiceProxy,
  RegisterInput,
  RegisterOutput
} from '@shared/service-proxies/service-proxies';
import { accountModuleAnimation } from '@shared/animations/routerTransition';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { RegisterService } from '../../services/register.service'

@Component({
  templateUrl: './register.component.html',
  animations: [accountModuleAnimation()]
})
export class RegisterComponent extends AppComponentBase {
  model: RegisterInput = new RegisterInput();
  saving = false;
  account: RegisterInformation = new RegisterInformation();
  constructor(
    injector: Injector,
    private _accountService: AccountServiceProxy,
    private _router: Router,
    private authService: AppAuthService,
    private registerService: RegisterService
  ) {
    super(injector);
  }

  save(): void {
    this.saving = true;
    this._accountService
      .register(this.model)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe((result: RegisterOutput) => {
        this.account.firstName = this.model.name;
        this.account.lastName = this.model.surname;
        this.account.email = this.model.emailAddress;
        this.account.userId = result.userId;
        this.registerService.addNewUserInformation(this.account).subscribe((response) => {
          console.log(response);
        })
        // if (!result.canLogin) {
        //   this.notify.success(this.l('SuccessfullyRegistered'));
        //   this._router.navigate(['/login']);
        //   return;
        // }

        // // Autheticate
        // this.saving = true;
        // this.authService.authenticateModel.userNameOrEmailAddress = this.model.userName;
        // this.authService.authenticateModel.password = this.model.password;
        // this.authService.authenticate(() => {
        //   this.saving = false;
        // });
      });
  }
}
export class RegisterInformation {
  firstName: string;
  lastName: string;
  email: string;
  userId: number;
}
