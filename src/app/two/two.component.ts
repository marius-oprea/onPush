import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { hightlight } from '../shared/highlight';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoComponent {
  @Input() id: number;
  @Input() user: any;
  @Input() obj: any;
  counter: number;
  idGamma: number;
  userGamma = {
    firstName: 'John',
    lastName: 'Doe'
  };    

  constructor(private cdr: ChangeDetectorRef, private element: ElementRef) {
    this.idGamma = 0;
    this.id = 0;
    this.counter = 0;
    // this.cdr.detach();
  }

  onClick() {
  }

  onGenerateGammaId() {
    this.idGamma = Math.floor(Math.random() * 100);
  }

  renderView() {
    console.log('App -> Two');
    hightlight(this.element);
  }  
}
