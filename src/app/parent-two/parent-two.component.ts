import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentTwoComponent implements AfterViewChecked {
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


  checkView() {
    console.log('Parent Two');
  }

  ngAfterViewChecked() {
    /*
    this.counter++;
    this.cdr.detectChanges(); 
    console.log('parent two - checkView')    
    */
  } 
}
