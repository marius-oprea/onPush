import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { hightlight } from '../shared/highlight';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreeComponent {
  @Input() id: number;
  @Input() user: any;
  @Input() value: any;

  idDelta: number;
  idEpsilon: number;

  constructor(private cdr: ChangeDetectorRef, private element: ElementRef) {
    this.idDelta = 0;
    this.idEpsilon = 0;
    this.id = 0;
  }
 
  onClick() {
  }

  onGenerateId(): number {
    return Math.floor(Math.random() * 100);
  }

  onGenerateDeltaId() {
    this.idDelta = this.onGenerateId();
  }

  onGenerateEpsilonId() {
    this.idEpsilon = this.onGenerateId();
  }

  renderView() {
    console.log('App -> Three');
    hightlight(this.element);
  }  
}
