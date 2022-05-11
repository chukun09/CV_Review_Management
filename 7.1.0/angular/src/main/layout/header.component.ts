import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AppAuthService } from '@shared/auth/app-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(private _authService: AppAuthService){
    
  }
  logout(): void {
    this._authService.logout();
  }
}
