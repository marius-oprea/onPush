import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { hightlight } from '../shared/highlight';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneComponent {
  @Input() id: number;
  oldName: string;
  counter: number;
  idAlpha: number;
  idBeta: number;
  userAlpha = {
    firstName: 'John',
    lastName: 'Doe'
  };
  userBeta = {
    firstName: 'John',
    lastName: 'Doe'
  };  
  
  constructor(private cdr: ChangeDetectorRef, private element: ElementRef) {
    this.idAlpha = 0;
    this.idBeta = 0;
    this.counter = 0;
    this.id = 0;
    this.oldName = '';
  }

  onClick() {
  }

  renderView() {
    console.log('App -> One');
    hightlight(this.element);
  }
}
