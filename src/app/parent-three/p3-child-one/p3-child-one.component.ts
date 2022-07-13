import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-p3-child-one',
  templateUrl: './p3-child-one.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class P3ChildOneComponent implements AfterViewChecked {
  counter: number;
  
  constructor(private cdr: ChangeDetectorRef) {
    this.counter = 0;
  }

  onClick() {
    // this.counter++;
  }
  

  checkView() {
    console.log('P3 Child 1');
  }

  ngAfterViewChecked() {
    /*
    this.counter++;
    this.cdr.detectChanges(); 
    console.log('p3 child one - checkView')    
    */
  }     
}
