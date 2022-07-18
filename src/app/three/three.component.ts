import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { HightlightService } from '../shared/highlight.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreeComponent {
  constructor(private cdr: ChangeDetectorRef, private element: ElementRef, private highlightService: HightlightService) {
  }
 
  onClick() {
  }

  renderView() {
    console.log('App -> Three');
    this.highlightService.run(this.element);
  }  
}
