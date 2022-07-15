import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { HightlightService } from '../shared/highlight.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneComponent {  
  constructor(private cdr: ChangeDetectorRef, private element: ElementRef, private highlightService: HightlightService) {
  }

  onClick() {
  }

  renderView() {
    console.log('App -> One');
    this.highlightService.run(this.element);
  }
}
