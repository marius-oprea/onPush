import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-three',
  templateUrl: './parent-three.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentThreeComponent implements AfterViewChecked {
  @Input() value: any;
  counter: number;

  constructor(private cdr: ChangeDetectorRef) {
    this.counter = 0;
  }
 
/*
  getValue() {
    console.log('getValue');
    return this.value;
  }
*/  


onClick() {
  // this.counter++;
}


  checkView() {
    console.log('Parent Three');
  }

  ngAfterViewChecked() {
  /*
  this.counter++;
  // this.cdr.detectChanges(); 
  console.log('parent three - checkView')    
  */
  } 
}
