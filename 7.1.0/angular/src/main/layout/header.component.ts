import { Component, ChangeDetectionStrategy, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppAuthService } from '@shared/auth/app-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent extends AppComponentBase {
  shownLoginName = '';
  userId : number;
  constructor(injector: Injector, private _authService: AppAuthService) {
    super(injector);
  }

  ngOnInit() {
    this.shownLoginName = this.appSession.getShownLoginName();
    this.userId = parseInt(localStorage.getItem('userId'));
  }
  logout(): void {
    localStorage.removeItem('userId');
    this._authService.logout();
  }
}
