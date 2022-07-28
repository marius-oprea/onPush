import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HightlightService } from 'src/app/shared/highlight.service';

@Component({
  standalone: true,
  selector: 'app-epsilon',
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './epsilon.component.html',
  styleUrls: ['./epsilon.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
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
