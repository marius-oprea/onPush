import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoComponent implements AfterViewChecked {
  @Input() id: number;
  @Input() obj: any;
  counter: number;
  idGamma: number;

  constructor(private cdr: ChangeDetectorRef) {
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

  ngAfterViewChecked() {    
    //this.counter++;
    console.log('App -> Two');
    // this.cdr.detectChanges();
    // this.cdr.markForCheck();
  } 
}
