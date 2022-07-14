import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { hightlight } from 'src/app/shared/highlight';

@Component({
  selector: 'app-epsilon',
  templateUrl: './epsilon.component.html',
  styleUrls: ['./epsilon.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpsilonComponent {  
  constructor(private cdr: ChangeDetectorRef, private element: ElementRef) {
  }

  onClick() {
  }

  renderView() {
    console.log('App -> Three -> Epsilon');
    hightlight(this.element);
  }    
}
