import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { hightlight } from 'src/app/shared/highlight';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlphaComponent {
  constructor(private cdr: ChangeDetectorRef, private element: ElementRef) {
  }

  onClick() {
  }

  renderView() {
    console.log('App -> One -> Alpha');
    hightlight(this.element);
  }  
}
