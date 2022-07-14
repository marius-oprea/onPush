import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { hightlight } from '../shared/highlight';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoComponent implements AfterViewChecked {
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

/*
  getObj() {
    console.log('getObj');
    return this.obj;
  }
*/  

  onClick() {
  }

  onDownCounter() {
    this.counter--;
  }

  onUpCounter() {
    this.counter++;
  }

  onGenerateGammaId() {
    this.idGamma = Math.floor(Math.random() * 100);
  }

  renderView() {
    hightlight(this.element);
  }  

  ngAfterViewChecked() {    
    //this.counter++;
    console.log('App -> Two');
    // this.cdr.detectChanges();
    // this.cdr.markForCheck();
    // hightlight(this.element);
  } 
}
