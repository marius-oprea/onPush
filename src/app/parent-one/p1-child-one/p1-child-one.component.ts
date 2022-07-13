import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-p1-child-one',
  templateUrl: './p1-child-one.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class P1ChildOneComponent implements AfterViewChecked {
  counter: number;

  constructor(private cdr: ChangeDetectorRef) {
    this.counter = 0;
    // this.cdr.detach();
  }

  onClick() {
    // this.counter++;
  }
  

  checkView() {
    console.log('P1 Child 1')
  }

  ngAfterViewChecked() {
    /*
    this.counter++;
    this.cdr.detectChanges(); 
    console.log('p1 child one - checkView')    
    */
  } 
}
