import { ChangeDetectionStrategy, Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-all-cv',
  animations: [appModuleAnimation()],
  templateUrl: './all-cv.component.html',
  styleUrls: ['./all-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllCvComponent extends AppComponentBase implements OnInit {
  like:boolean = true;
  constructor(injector : Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
  toogleLike(){
    this.like = !this.like;
  }
}
