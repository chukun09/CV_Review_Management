import { Compiler, Component, Injector, Input, NgModule, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponentBase } from '@shared/app-component-base';
import { TemplateService } from '../../../services/template.service';
@Component({
  selector: 'app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BaseTemplateComponent extends AppComponentBase implements OnInit {
  templateHTML: string;
  styleUrl: any;
  @Input() dataCV: any;
  @ViewChild("container", { read: ViewContainerRef })
  container: ViewContainerRef;
  constructor(injector: Injector, private compiler: Compiler,
    private templateService: TemplateService) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    (await this.templateService.getTemplateById(1)).subscribe((res) => {
      this.templateHTML = res.result.templateURL;
      this.styleUrl = res.result.styleURL;
      // this.addComponent(this.templateHTML);
    })
  }
  // private addComponent(_template: string = ``, properties: any = {}) {
  //   @Component({
  //     template: _template,
    
  //   })
  //   class DynamicComponent {
    
  //   }
  //   @NgModule({
  //     imports: [BrowserModule,RouterModule],
  //     declarations: [DynamicComponent],
  //   })
  //   class DynamicModule { }

  //   const mod = this.compiler.compileModuleAndAllComponentsSync(DynamicModule);
  //   const factory = mod.componentFactories.find(
  //     comp => comp.componentType === DynamicComponent
  //   );
  //   const component = this.container.createComponent(factory);
  //   Object.assign(component.instance, properties);
  //   // If properties are changed at a later stage, the change detection
  //   // may need to be triggered manually:
  //   // component.changeDetectorRef.detectChanges();
  // }
}

