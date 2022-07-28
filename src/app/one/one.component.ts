import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HightlightService } from '../shared/highlight.service';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';

@Component({
  standalone: true,
  selector: 'app-one',
  imports: [    
    CommonModule,
    AlphaComponent,
    BetaComponent,
    MatButtonModule,
    MatCardModule
  ],
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
