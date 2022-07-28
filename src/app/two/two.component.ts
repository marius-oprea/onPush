import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HightlightService } from '../shared/highlight.service';
import { GammaComponent } from './gamma/gamma.component';

@Component({
  standalone: true,
  selector: 'app-two',
  imports: [
    CommonModule,
    GammaComponent,
    MatButtonModule,
    MatCardModule    
  ],  
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoComponent {
  constructor(private cdr: ChangeDetectorRef, private element: ElementRef, private highlightService: HightlightService) {
  }

  onClick() {
  }

  renderView() {
    console.log('App -> Two');
    this.highlightService.run(this.element);
  }  
}
