import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { hightlight } from '../shared/highlight';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreeComponent implements AfterViewChecked {
  @Input() id: number;
  @Input() user: any;
  @Input() value: any;
  counter: number;
  idDelta: number;
  idEpsilon: number;
  userDelta = {
    firstName: 'John',
    lastName: 'Doe'
  };  
  userEpsilon = {
    firstName: 'John',
    lastName: 'Doe'
  };    

  constructor(private cdr: ChangeDetectorRef, private element: ElementRef) {
    this.idDelta = 0;
    this.idEpsilon = 0;
    this.id = 0;
    this.counter = 0;
  }
 
/*
  getValue() {
    console.log('getValue');
    return this.value;
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
    hightlight(this.element);
  }  

  ngAfterViewChecked() {  
    //this.counter++;
    console.log('App -> Three');
    // this.cdr.detectChanges(); 
    // hightlight(this.element);
  } 
}
