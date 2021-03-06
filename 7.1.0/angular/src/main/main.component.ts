import { Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { AppComponentBase } from '../shared/app-component-base';
import { SignalRAspNetCoreHelper } from '../shared/helpers/SignalRAspNetCoreHelper';
import { LayoutStoreService } from '../shared/layout/layout-store.service';

@Component({
  templateUrl: './main.component.html'
})
export class MainComponent extends AppComponentBase implements OnInit {
  constructor(
    injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    SignalRAspNetCoreHelper.initSignalR();

    abp.event.on('abp.notifications.received', (userNotification) => {
      abp.notifications.showUiNotifyForUserNotification(userNotification);
      console.log(userNotification);

      // Desktop notification
      Push.create('AbpZeroTemplate', {
        body: userNotification.notification.data.message,
        icon: abp.appPath + 'assets/app-logo-small.png',
        timeout: 6000,
        onClick: function () {
          window.focus();
          this.close();
        }
      });
    });
}
}