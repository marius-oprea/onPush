import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { HightlightService } from 'src/app/shared/highlight.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BetaComponent {  
  constructor(private cdr: ChangeDetectorRef, private element: ElementRef, private highlightService: HightlightService) {
  }

  onClick() {
  }

  renderView() {
    console.log('App -> One -> Beta');
    this.highlightService.run(this.element);
  }  
}
