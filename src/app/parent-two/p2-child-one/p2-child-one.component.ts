import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-p2-child-one',
  templateUrl: './p2-child-one.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class P2ChildOneComponent implements AfterViewChecked {
  counter: number;

  constructor(private cdr: ChangeDetectorRef) {
    this.counter = 0;
  }

  onClick() {
    // this.counter++;
  }
  

  checkView() {
    console.log('P2 Child 1');
  }

  ngAfterViewChecked() {
    /*
    this.counter++;
    this.cdr.detectChanges(); 
    console.log('p2 child one - checkView')    
    */
  }   
}
