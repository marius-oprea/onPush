import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { HightlightService } from 'src/app/shared/highlight.service';

@Component({
  selector: 'app-epsilon',
  templateUrl: './epsilon.component.html',
  styleUrls: ['./epsilon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpsilonComponent {  
  constructor(private cdr: ChangeDetectorRef, private element: ElementRef, private highlightService: HightlightService) {
  }

  onClick() {
  }

  renderView() {
    console.log('App -> Three -> Epsilon');
    this.highlightService.run(this.element);
  }    
}
