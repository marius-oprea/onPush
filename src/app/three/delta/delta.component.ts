import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-delta',
  templateUrl: './delta.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeltaComponent implements AfterViewChecked {
  counter: number;
  
  constructor(private cdr: ChangeDetectorRef) {
    this.counter = 0;
  }

  onClick() {
  }

  ngAfterViewChecked() {    
    this.counter++;
    this.cdr.detectChanges();
  }     
}
