import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreeComponent implements AfterViewChecked {
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

  ngAfterViewChecked() {  
    this.counter++;
    this.cdr.detectChanges(); 
  } 
}
