import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HightlightService } from '../shared/highlight.service';
import { DeltaComponent } from './delta/delta.component';
import { EpsilonComponent } from './epsilon/epsilon.component';

@Component({
  standalone: true,
  selector: 'app-three',
  imports: [
    CommonModule,
    EpsilonComponent,
    DeltaComponent,
    MatButtonModule,
    MatCardModule
  ],
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
