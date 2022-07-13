import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoComponent implements AfterViewChecked {
  @Input() obj: any;
  counter: number;

  constructor(private cdr: ChangeDetectorRef) {
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
  // this.counter++;
}

  ngAfterViewChecked() {    
    this.counter++;
    this.cdr.detectChanges(); 
  } 
}
