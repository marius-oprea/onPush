import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreeComponent implements AfterViewChecked {
  @Input() id: number;
  @Input() value: any;
  counter: number;
  idDelta: number;
  idEpsilon: number;

  constructor(private cdr: ChangeDetectorRef) {
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

  ngAfterViewChecked() {  
    //this.counter++;
    console.log('App -> Three');
    // this.cdr.detectChanges(); 
  } 
}
