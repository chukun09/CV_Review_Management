import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';

@Component({
  selector: 'app-all-cv',
  animations: [appModuleAnimation()],
  templateUrl: './all-cv.component.html',
  styleUrls: ['./all-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllCvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
