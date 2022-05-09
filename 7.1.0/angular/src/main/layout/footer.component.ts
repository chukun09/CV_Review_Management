import { Component, Injector, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  currentYear: number;
  text: string;

  constructor() {
    this.currentYear = new Date().getFullYear();
    this.text = "Desgin by Trần Đức Long - 20183952 @ BKHUST";
  }
}
