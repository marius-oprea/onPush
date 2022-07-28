import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HightlightService } from 'src/app/shared/highlight.service';

@Component({
  standalone: true,
  selector: 'app-beta',
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
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
