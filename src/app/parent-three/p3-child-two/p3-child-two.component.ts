import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-p3-child-two',
  templateUrl: './p3-child-two.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class P3ChildTwoComponent implements AfterViewChecked {
  counter: number;
  
  constructor(private cdr: ChangeDetectorRef) {
    this.counter = 0;
    // this.cdr.detach();
  }

  onClick() {
    // this.counter++;
  }
  

  checkView() {
    console.log('P3 Child 2');
  }

  ngAfterViewChecked() {
    /*
    this.counter++;
    this.cdr.detectChanges(); 
    console.log('p3 child two - checkView')    
    */
  }   
}
