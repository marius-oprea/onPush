import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { HightlightService } from 'src/app/shared/highlight.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlphaComponent {
  constructor(private cdr: ChangeDetectorRef, private element: ElementRef, private highlightService: HightlightService) {
  }

  onClick() {
  }

  renderView() {
    console.log('App -> One -> Alpha');
    this.highlightService.run(this.element);
  }  
}
