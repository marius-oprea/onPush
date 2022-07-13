import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class BetaComponent implements AfterViewChecked {
  @Input() id: number;
  counter: number;
  
  constructor(private cdr: ChangeDetectorRef) {
    this.id = 0;
    this.counter = 0;
  }

  onClick() {
  }

  onDownCounter() {
    this.counter--;
  }

  onUpCounter() {
    this.counter++;
  }  

  ngAfterViewChecked() {
    // this.counter++;
    console.log('App -> One -> Beta');
    // this.cdr.detectChanges();
  } 
}
