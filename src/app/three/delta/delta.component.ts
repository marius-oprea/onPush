import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { hightlight } from 'src/app/shared/highlight';

@Component({
  selector: 'app-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeltaComponent {  
  constructor(private cdr: ChangeDetectorRef, private element: ElementRef) {
  }

  onClick() {
  }

  renderView() {
    console.log('App - Three -> Delta');
    hightlight(this.element);
  }    
}
