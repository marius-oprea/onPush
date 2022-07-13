import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-p1-child-two',
  templateUrl: './p1-child-two.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class P1ChildTwoComponent implements AfterViewChecked {
  counter: number;
  
  constructor(private cdr: ChangeDetectorRef) {
    this.counter = 0;
  }

  onClick() {
    // this.counter++;
  }
  

  checkView() {
    console.log('P1 Child 2')
  }  

  ngAfterViewChecked() {
    /*
    this.counter++;
    this.cdr.detectChanges(); 
    console.log('p1 child two - checkView')    
    */
  } 
}
