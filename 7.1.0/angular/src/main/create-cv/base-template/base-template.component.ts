import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.css']
})
export class BaseTemplateComponent extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
