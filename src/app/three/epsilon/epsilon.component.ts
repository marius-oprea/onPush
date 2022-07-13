import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-epsilon',
  templateUrl: './epsilon.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpsilonComponent implements AfterViewChecked {
  counter: number;
  
  constructor(private cdr: ChangeDetectorRef) {
    this.counter = 0;
    // this.cdr.detach();
  }

  onClick() {
    // this.counter++;
  }
  
  ngAfterViewChecked() {    
    this.counter++;
    this.cdr.detectChanges(); 
  }   
}
