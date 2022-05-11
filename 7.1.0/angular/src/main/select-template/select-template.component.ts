import { ChangeDetectionStrategy, Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-select-template',
  templateUrl: './select-template.component.html',
  styleUrls: ['./select-template.component.css'],
  animations: [appModuleAnimation()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectTemplateComponent extends AppComponentBase implements OnInit  {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
