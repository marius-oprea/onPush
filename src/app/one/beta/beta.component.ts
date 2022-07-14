import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { hightlight } from 'src/app/shared/highlight';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BetaComponent {  
  constructor(private cdr: ChangeDetectorRef, private element: ElementRef) {
  }

  onClick() {
  }

  renderView() {
    console.log('App -> One -> Beta');
    hightlight(this.element);
  }  
}
